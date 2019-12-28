const fs = require('fs')
const path = require('path')
const Router = require('koa-router')

// 读取目录文件
function load(dir, cb) {
  // 获取文件的绝对路径
  const url = path.resolve(__dirname, dir)
  // 读取目录
  const files = fs.readdirSync(url)
  // traverse
  files.forEach((fileName) => {
    // 去掉扩展名
    fileName = fileName.replace('.js', '')
    const file = require(url + '/' +fileName)
    cb(fileName, file)
  })
}

// 加载路由
// load('routes', (fileName) => {
//   console.log('routes:', fileName);
// })

function initRouter() {
  const router = new Router()
  load('routes', (fileName, routes) => {
    const prefix = fileName === 'index' ? '' : `/${fileName}`
    // console.log('file  ', routes);
    Object.keys(routes).forEach(key => {
      // console.log('key', key);
      const [method, path] = key.split(' ')
      console.log(`正在映射地址${method.toLocaleUpperCase()} ${prefix}${path}`);
      // 注册路由
      // app.get('/', ctx => {})
      router[method](prefix + path, routes[key])
    })
  })
  return router
}



module.exports = {
  initRouter
}