Babel安装流程
第一步：安装Babel
npm install --save-dev @babel/core

cnpm install --save-dev @babel/core



{

  "presets": [],

  "plugins": []

}





npm install --save-dev @babel/preset-env

cnpm install --save-dev @babel/preset-env







npm install --save-dev @babel/cli

cnpm install --save-dev @babel/cli







// @babel/env

// @babel/preset-env





```
# 先创建一个 src 文件夹存放源文件
mkdir src

# 把 es6Demo.js 移到 src 里
move es6Demo.js src\

# 然后转码
npx babel src --out-dir lib
```