const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());       // to support JSON-encoded bodies
app.use(express.urlencoded()); // to support URL-encoded bodies

app.options("/*", function(req, res, next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    res.send(200);
});

let userName = "";
let password = "";

app.post('/register', function(req, res){
    userName = req.body.username;
    password = req.body.password;
    res.send({status: true});
});


app.post('/login_check', function(req, res){
    if(req.body.username === userName && req.body.password === password) {
        res.json({status: true});
    } else {
        res.json({status: false});
    }
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));