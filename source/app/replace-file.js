const fs = require('fs');
const path = require('path');
const baidu = require('baidutemplate');
const process = require('process');
const _module = require('module');
const match = require('../../utils/match');

// 匹配其他文件正则
const htmlReg = /<%html:([\s\S]*?)%>/;
const noteReg = /<!--([\s\S]*?)-->/;
const cssReg = /<%css:([\s\S]*?)%>/;
const jsReg = /<%js:([\s\S]*?)%>/;
const headReg = /<\/head>/;

// 缓存已经获取的file
let __files = {};
let rootPath = path.join(__dirname, `../static/`);

module.exports = function({ path, data, needCatch = false }) {
  let file = readFile(path, needCatch);
  let regRes;
  let fileMatch = match(file);

  file = fileMatch
    // 注释
    .loop(noteReg, function(file, matches) {
      let note = matches[1]
        .trim()
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
      return file.replace(matches[0], '');
    })
    // HTML
    .loop(htmlReg, function(file, matches) {
      let _path = `${rootPath}/${matches[1].trim()}`;
      return file.replace(matches[0], readFile(_path, needCatch));
    })
    // CSS
    .loop(cssReg, function(file, matches) {
      let _path = `static/${matches[1].trim()}`;
      file = file.replace('</head>', `<link rel="stylesheet" href="../${_path}"></head>`);
      return file.replace(matches[0], ``);
    })
    // JS
    .loop(jsReg, function(file, matches) {
      let _path = `static/${matches[1].trim()}`;
      file = file.replace('</body>', `<script src="../${_path}"></script></body>`);
      return file.replace(matches[0], ``);
    });

  return file.str;
};

function readFile(path, needCatch) {
  if (needCatch) {
    if (!__files[path]) {
      let file = fs.readFileSync(path);
      __files[path] = file.toString();
    }
    return __files[path];
  }

  return fs.readFileSync(path);
}
