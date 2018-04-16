const PATH = require('path');
const baidu = require('baidutemplate');
const replaceFile = require('./replace-file');
const routes = require('./route');

function createCtrl({ path }) {
  let root = `../static/functions/${path}`;
  let store = require(PATH.join(__dirname, `${root}/store`));

  return (req, res) => {
    let str = baidu.template(replaceFile({ path: PATH.join(__dirname, `${root}/page.html`) }), store);
    res.send(str);
  };
}

module.exports = {
  loop(callback) {
    routes.forEach(({ url, path }) => {
      callback({
        url,
        ctrl: createCtrl({ path })
      });
    });
  }
};
