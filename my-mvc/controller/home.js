module.exports = app => ({
  index: async ctx => {
    // ctx.body = '首页ctrl'
    app.ctx.body = await app.$model.user.findAll()
  },
  detail: async ctx => {
    ctx.body = '详情页ctrl'
  }
})