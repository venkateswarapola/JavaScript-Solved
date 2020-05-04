const express = require('express');
const router = express.Router();
const db = require('../config/dbConnection');

router.get('/showposts/:name', async (req, res) => {
    await db.get().collection('user').find(req.params).toArray()
        .then(response => {
            res.send(response[0].posts)
        })
        .catch(error => res.send(error))
});

router.post('/addposts/:name', async (req, res) => {
    let newposts = {
        postTitle: req.body.postTitle,
        postData: req.body.postData
    }
    await db.get().collection('user').updateOne(req.params, { $addToSet: { posts: newposts } })
        .then((result) => {
            if (result.modifiedCount != 0) res.send("Data Updated");
            else if (result.matchedCount == 0) res.send("User not found");
            else if (result.modifiedCount == 0 && result.matchedCount != 0) res.send("Post already exists");
            else res.send('Updation failed try again');
        })
        .catch(error => res.send(error.errmsg))
});

router.post('/deleteposts/:name/:postTitle', async (req, res) => {
    await db.get().collection('user').updateOne({ name: req.params.name }, { $pull: { posts: { postTitle: req.params.postTitle } } })
        .then((result) => {
            console.log(result)
            if (result.modifiedCount != 0) res.send("Data deleted");
            else if (result.matchedCount == 0) res.send("User not found");
            else if (result.modifiedCount == 0 && result.matchedCount != 0) res.send("Post not found");
            else res.send('Updation failed try again');
        })
        .catch(error => res.send(error.errmsg))
});

module.exports = router;