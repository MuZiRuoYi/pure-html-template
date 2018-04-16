// import express from 'express';
const express = require('express');
const fs = require('fs');
const baidu = require('baidutemplate');
const funs = require('./source/app');

const app = express();

// app.use(express.static('source/static'));
app.use('/static', express.static('source/static'));

app.get('/', function(req, res) {
  res.send('Hello World!');
});

funs.loop(({ url, ctrl }) => {
  app.get(url, ctrl);
});

app.listen(3002, function() {
  console.log('Example app listening on port 3000!');
});
