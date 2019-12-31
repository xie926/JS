// 封装, 用户使用封装后的my
const Koa = require('koa')
const { initRouter, initController, initService, loadConfig, initSchedule } = require('./loader') 

class My {
  constructor(conf) {
    this.$app = new Koa(conf)
    loadConfig(this)                // 加载配置项（数据库）
    this.$ctrl = initController(this)    // controller
    this.$service = initService()     // service
    this.$router = initRouter(this)    // router
    // 启用路由 https://www.jianshu.com/p/7bf7f1368293
    this.$app.use(this.$router.routes())    ////app.use(router.routes())

    initSchedule()
  }
  // 启动
  start(port) {
    this.$app.listen(port, () => {
      console.log('myServer is running in ', port)
    })
  }
}

module.exports = My