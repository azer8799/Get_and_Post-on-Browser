// const express = require('express');
// const app = express();

// app.get("/",function (req,res) {
// 	res.send('hello how are you')
// })

// app.get("/stone",function (req,res) {
// 	res.send('there you go')
// })

// app.get("/stone/:id",function (req,res) {
// 	const id = req.params.id
// 	res.send('hey azer'+ id )
// })
// app.listen(9000,function (req,res) {
// 	console.log('running--')
// })

const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

function sendViewMiddleware(req, res, next) {
    res.sendView = function(view) {
        return res.sendFile(__dirname + "/" + view);
    }
    next();
}

app.use(sendViewMiddleware);

app.get('/', function(req, res) {
    res.sendView('express.html');
});

app.post('/login',function(req, res){
  var user_name = req.body.user;
  var password = req.body.password;
  console.log("Post request from client: User name = "+user_name+", password is "+password);
  res.end("yes");
});

app.listen(9000,function (req,res) {
	console.log('running--')
})