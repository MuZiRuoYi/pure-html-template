# pure-html-template

[note_1]: #note_1

使用 baiduTemplate.js 获取纯粹的 HTML 模板。

### 依赖

全局安装 node/npm/[[nodemon][note_1]]（默认 node 和 npm 已安装，运行以下代码安装 nodemon）：

    npm install -g nodemon

拉取代码后，运行以下代码：

    nodemon app

然后访问[localhost:3002](http://localhost:3002/)进行访问。

使用 vscode 开发中，也可以自己配置调试环境，就不再需要运行上述命令。

### 构建

运行以下命令构建最终模板：

    node build

文件夹 build 中即为最终构建代码，可以于项目中使用（暂时构建脚本未开发）。

<span id="note_1">nodemon</span>：为了开发中能够自动刷新服务，不用每次更新代码重启服务
