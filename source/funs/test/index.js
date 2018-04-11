var fs = require('fs');
var path = require('path');
var baidu = require('baidutemplate');
var data = require('./store');
var replaceFile = require('../../../utils/replace-file');

module.exports = function(req, res) {
  let str = baidu.template(replaceFile({ path: path.join(__dirname, './index.html') }), data);
  res.send(str);
};
