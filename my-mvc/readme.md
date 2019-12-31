# 手撸一个基于koa的框架（类似于egg.js）

1. 初始化
npm init -y
2. 路由搭建
routes/index.js(user.js)
3. 启动 设置注册router
loader.js
npm i koa-router
4. 封装
my.js
npm i koa
5. app
app.js
6. controller
controller/home.js
让页面上展示home.js中的内容，而非直接展示routes/index.js中的数据
7. service
service/user.js
让页面上展示user.js中请求的数据，而非直接展示routes/user.js中的数据
8. config
config/index.js
数据库连接
loader.js  sequelize mysql2
npm i sequelize
9. model
model/user.js
10. controller/home.js
改为请求model中的数据 model数据来自数据库
sequelize 自动新建users表
11. 加载中间件
npm install node-schedule
