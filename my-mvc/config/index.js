module.exports = {
  db: {
    dialect: 'mysql',
    host: 'localhost',
    database: 'lm',
    username: 'root',
    password: '123456',
  },
  middleware: ['logger']    // 加载logger中间件
}