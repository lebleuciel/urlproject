var router = require('./routes/index');
var express = require('express');

var app = express();

app.use(router);

module.exports = app;
