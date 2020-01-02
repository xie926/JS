# 组件，既可以在客户端，也可以在服务端运行 -- 同构

<!-- https://www.jianshu.com/p/a4e0b58fb0a9 -->
首屏直出：
SPA：请求返回<div id="app"></div>无内容 -> js请求 -> js构造html
SSR: 请求返回<div id="app">内容</div> -> js 事件绑定

## 指标

FP: first-paint 有像素落点的时候
FCP: first-content-paint 有内容渲染的时候
FMP: first-meaning-paint 有意义的内容

TTI: time-to-i 可交互
DCL: dom content-loaded dom 解析完成的时间点
L: load

虚拟
服务端：生成 html
客户端：负责事件绑定

SPA：html 事件 在客户端

## JEE ejs

服务端渲染

## node

1. 服务端渲染
2. webpack babel 工具
3. 中间层（BFF）
   client  /buy  server
   问题：
   /num    1
   /login  2
   /buy    3
   解决：
   node: backend for front
   get('/nodeBuy', async () => {
     // 内网请求
     // 速度理论上限
     // rpc
     get('/num') login buy
   })
   // 非必要
   rpc：romote process call

## 上线

server: /build/bundle.js node项目 用node运行
// localhost:3000/login node 渲染 login组件 html

express.static('public')

public：/public/index.js
// 作为node 服务返回的html 需要加载的资源
