var express = require('express')
var app = express()
var mongoose = require('mongoose')
var bodyParse = require('body-parser')
var cors = require('cors')
var port = process.env.PORT || 4200


app.get('/', function(req, res) {
  res.send('Hello Express')
})

app.listen(port, function(){
  console.log('hello world');
})
