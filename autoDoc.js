let fs = require("fs");
let documentation = require("documentation");
let cline = "```";
let tp = `# 常用的前端 JavaScript 方法封装
##### 总结一些自己用的js方法，方便以后搜索和查看
##### 说不定大家也会用到
##### 欢迎评论区补充和留言

> 安装依赖

${cline}shell
yarn add git+https://github.com/zhoujie16/zxm_utils.git
${cline}

> 全部引入

${cline}js
import \* as ZxmUtils from "zxm-utils";
${cline}

> 按需引入

${cline}js
import { xxx, xxx } from "zxm-utils";
${cline}`;

let files = fs.readdirSync("src");
files = files.map((x) => `src/${x}`);
documentation
  .build(files, {})
  .then(documentation.formats.md)
  .then((output) => {
    let resput = `${tp}
${output}`;
    fs.writeFileSync("./README.md", resput);
  });
