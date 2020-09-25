// const http = require('http')

// const server = http.createServer((req,res) => {
//   res.end('hello word')
// })

// server.listen(3000, () => {
//   console.log('ok')
// })

// 以上是原生启动一个web服务

const Koa = require('koa')
const app = new Koa()

const main = ctx => {
  ctx.response.body = 'hello world'
}

app.use(main)

app.listen(3000)