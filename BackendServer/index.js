const express = require('express');
const bodyParser = require('body-parser');
const db = require('./config/dbConnection');
const userRouter = require('./routes/users');
const postRouter = require('./routes/posts');
const app = express();

app.use(bodyParser.json());

app.use('/user',userRouter);
app.use('/posts',postRouter);
app.use('*', (req, res)=>{
    res.send('404 Route not found');
  });

db.connect();

app.listen(3000);