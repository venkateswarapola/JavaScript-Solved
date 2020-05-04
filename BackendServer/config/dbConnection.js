const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const dbName = 'myapp';

let state = {
  db: null,
}

exports.connect = () => {
  MongoClient.connect(url, { useUnifiedTopology: true })
    .then(client => {
      console.log('Connected to Database');
      state.db = client.db(dbName);
      state.db.createCollection("user", {
        validator: {
          $jsonSchema: {
            bsonType: "object",
            additionalProperties: false,
            required: ["name", "email"],
            properties: {
              _id: {
                bsonType: "objectId"
              },
              name: {
                bsonType: "string",
                description: "required and must be a string"
              },
              address: {
                bsonType: "object",
                required: ["city"],
                properties: {
                  street: {
                    bsonType: "string",
                    description: "must be a string if the field exists"
                  },
                  city: {
                    bsonType: "string",
                    "description": "must be a string and is required"
                  }
                }
              },
              email: {
                bsonType: "string",
                pattern: "@gmail\.com$",
                description: "must be a string and match the regular expression pattern"
              },
              posts: {
                bsonType: ["array"],
                minItems: 1,
                maxItems: 10,
                items: {
                  bsonType: "object",
                  properties: {
                    postTitle: {
                      bsonType: "string",
                      "description": "must be a string and is required"
                    },
                    postData: {
                      bsonType: "string",
                      "description": "must be a string and is required"
                    }
                  }
                }
              }
            }
          }
        }
      })
    })
    .catch(error => console.log("DB is not running"));
}

exports.get = () => {
  if (state.db == null) {
    console.log("DB not running");
    return null;
  }
  else return state.db;
}