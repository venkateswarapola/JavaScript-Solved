const express = require('express');
const router = express.Router();
const db = require('../config/dbConnection');

router.get('/show', async (req, res) => {
    await db.get().collection('user').find().toArray()
        .then(response => {
            res.send(response)
        })
        .catch(error => res.send(error.errmsg))
});

router.post('/add', async (req, res) => {
    await db.get().collection('user').insertOne(req.body)
        .then(() => { res.send('Data Inserted') })
        .catch(error => res.send(error.errmsg))
});

router.post('/update/:name', async (req, res) => {
    let user = {
        name: req.body.name,
        email: req.body.email,
        address: req.body.address
    }
    await db.get().collection('user').updateOne(req.params, { $set: user })
        .then((result) => { 
            console.log(result);
            if(result.matchedCount != 0) res.send("Data Updated");
            else if(result.matchedCount == 0) res.send("User not found");
            else res.send('Updation failed try again');
         })
        .catch(error => res.send(error.errmsg))
});

router.post('/delete/:name', async (req, res) => {
    const result = await db.get().collection('user').deleteOne(req.params)
        .then(result => { 
            if(result.deletedCount == 1) res.send("Data Deleted");
            else res.send("User not found");
         })
        .catch(error => res.send(error.errmsg))
})

module.exports = router;