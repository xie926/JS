module.exports = async (ctx, next) => {
  console.log('logger')
  // 查看加载一个中间件所需的时间
  console.log(ctx.method + ' ' + ctx.path)
  const start = new Date()
  await next()     // next 是koa的一个中间件
  const duration = new Date() - start
  console.log(ctx.method + ' ' + ctx.path + ' ' + ctx.status + ' ' + duration + 'ms')
}