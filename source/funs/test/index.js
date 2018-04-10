var fs = require('fs');
var path = require('path');
var baidu = require('baidutemplate');
var data = require('./store');
var convertFile = require('../../../utils/convert-file');

module.exports = function(req, res) {
  // var file = fs.readFileSync(path.join(__dirname, './index.html'));
  let str = baidu.template(convertFile({ path: path.join(__dirname, './index.html') }), data);
  res.send(str);
};
