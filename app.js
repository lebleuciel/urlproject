var router = require('./routes/index');
var express = require('express');
var multer = require('multer');
var upload = multer();

var app = express();

app.use(upload.array());

app.use(router);

module.exports = app;
