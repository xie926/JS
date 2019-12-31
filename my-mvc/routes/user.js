// 路由匹配  user前缀
module.exports = {
  // 直接把路由路径写成方法名
  // 'get /': async ctx => {     // '/'
  //   ctx.body = '用户首页'
  // },
  // 'get /detail': async ctx => {      // '/detail'
  //   ctx.body = '用户详情页'
  // }
  
  'get /': async (app) => {
    const name = await app.$service.user.getName()
    app.ctx.body = '用户名：' + name
  },
  'get /detail': async (app) => {
    app.ctx.body = '年龄：' + await app.$service.user.getAge()
  }
}