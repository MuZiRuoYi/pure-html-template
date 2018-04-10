var fs = require('fs');
var baidu = require('baidutemplate');
// var _path = require('path');
var process = require('process');
var _module = require('module');

var regPath = /<%path:([\s\S]*?)%>/;

module.exports = function({ path, data }) {
  // var p = _path.join(_module.paths(), path);
  var file = fs.readFileSync(path).toString();
  var regRes = file.match(regPath);
  var _path = regRes.trim();
  var f = fs.readFileSync(str);
  console.log(file);
  console.log(f);
  return file;
};
