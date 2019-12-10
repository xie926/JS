// const Koa = require('koa');
const Koa = require('./Mykoa.js')

const app = new Koa();

app.use(async (ctx, next) => {
  console.log(1);
  await next();
  console.log(2);
})

app.use(async (ctx, next) => {
  console.log(3);
  await next();
  console.log(4);
})

app.use(async (ctx, next) => {
  console.log(5);
})


app.run()
// app.listen(3000, () => {
//   console.log('server 3000');
  
// })

const http = require('http')
http.createServer((req, res) => {
  console.log('server');
  app.run()
})
