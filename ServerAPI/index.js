const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

app.get('/user1/:a/:b/:c',(req,res)=>{
    let str = req.params.c.split(',');
    let arr = [];
    for(let i = 0 ;i<str.length;i++)
    {
        arr.push('feature'+(i+1)+":"+str[i] );
    }
    res.send({
        a: req.params.a,
        b: req.params.b,
        c: arr
    })
});

app.get('/user2/:a/:b/:c',(req,res)=>{
    let str = req.params.c.split(',');
    let arr = [];
    for(let i = 0 ;i<str.length;i++)
    {
        arr.push((i+1)+'K'+":"+str[i] );
    }
    res.send({
        a: req.params.a,
        b: req.params.b,
        c: arr
    })
});

app.get('/user3/:a/:b/:c',(req,res)=>{
    res.send({
        a: req.params.a,
        b: req.params.b,
        c: req.params.c.split(',')
    })
});

app.get('/user4/:a/:b/:c',(req,res)=>{
    let str = req.params.c.split(',');
    let arr = [];
    for(let i = 0 ;i<str.length;i++)
    {
        arr.push('value'+(i+1)+":"+str[i] );
    }
    res.send({
        a: req.params.a,
        b: req.params.b,
        c: arr
    })
});

app.listen(3000);