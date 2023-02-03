var router = require('./routes/index');
var express = require('express');
var multer = require('multer');
var upload = multer();


var app = express();

app.use(express.json())

app.use(router);


module.exports = app;