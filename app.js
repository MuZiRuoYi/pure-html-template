var express = require('express');
var fs = require('fs');
var baidu = require('baidutemplate');
var test = require('./source/funs/test');

var app = express();

app.use(express.static('source'));
// app.use('/test', express.static('source/funs/test'));

app
  .get('/', function(req, res) {
    res.send('Hello World!');
  })
  .get('/test', test);

app.listen(3000, function() {
  console.log('Example app listening on port 3000!');
});
