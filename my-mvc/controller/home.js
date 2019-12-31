module.exports = app => ({
  index: async () => {
    // ctx.body = '首页Controller'
    // 请求model中的数据
    app.ctx.body = await app.$model.user.findAll()
  },
  detail: async ctx => {
    ctx.body = '首页详情Controller'
  }
})