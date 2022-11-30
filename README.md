### [在 React 生態圈內打滾的一年 feat. TypeScript系列](https://ithelp.ithome.com.tw/users/20106935/ironman/2188)
指令部分:
```javascript=
npm init -y
npm install webpack webpack-cli --save-dev
npm install eslint --save-dev
eslint --init
npm run lint //加完scripts
npm install @babel/core @babel/cli --save-dev //Babel 的核心套件
npm install @babel/preset-env --save-dev //對 ES6 轉換語法的 Preset
npm install babel-loader --save-dev //Webpack 需要的 loader 套件
npm install react react-dom --save //React
npm install @babel/preset-react --save-dev //編譯 JSX 語法的 Preset
npm install node-sass //將 SCSS 編譯成 CSS
npm install style-loader css-loader sass-loader --save-dev //需先npm install typescript sass fibers --save-dev
npm install mini-css-extract-plugin --save-dev
//day05
npm install webpack-dev-server --save-dev //先設定webpack.config.js
//day10
npm install prop-types --save
//day12
npm install redux react-redux --save

```
