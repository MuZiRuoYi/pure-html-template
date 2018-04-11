var fs = require('fs');
var baidu = require('baidutemplate');
var process = require('process');
var _module = require('module');
var match = require('./match');

// 匹配其他文件正则
var htmlReg = /<%html:([\s\S]*?)%>/;
var noteReg = /<!--([\s\S]*?)-->/;
var cssReg = /<%css:([\s\S]*?)%>/;
var jsReg = /<%js:([\s\S]*?)%>/;

// 缓存已经获取的file
var __files = {};

module.exports = function({ path, data }) {
  var file = fs.readFileSync(path).toString();
  var regRes;
  var fileMatch = match(file);

  file = fileMatch
    .loop(noteReg, function(file, matches) {
      var note = matches[1]
        .trim()
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
      return file.replace(matches[0], ''); // <!--' + note + '-->
    })
    .loop(htmlReg, function(file, matches) {
      var _path = matches[1].trim();
      return file.replace(matches[0], readFile(_path));
    });

  return file.str;
};

function readFile(path) {
  if (!__files[path]) {
    var file = fs.readFileSync(path);
    __files[path] = file.toString();
  }
  return __files[path];
}
