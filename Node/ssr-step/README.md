## 组件，既可以在客户端，也可以在服务端运行
同构 既可以在服务端跑，又要在客户端跑
首屏直出：
SPA:
1. <div id = "app"></div>没有实质性的内容
2. js
3. js html
4. 真实页面

SSR:
1. <div id="app">内容</div>
2. js 事件绑定

FP: first-paint 有像素落点的时候
FCP: first-content-paint 有内容渲染的时候
FMP: first-meaning-paint 有意义的内容
TTI: time-to-interaction 可交互
DCL: dom content loaded 解析完成的时候
L: load 这个页面资源加载完毕

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

- html同构
流程：
server 返回一个html,使用组件renderToString转字符串返回字符串
绑定事件 服务端返回html, 客户端绑定事件


