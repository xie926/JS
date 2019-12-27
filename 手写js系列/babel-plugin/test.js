const babel = require('babel-core')

const result = babel.transform('const result = 1 + 2 + 3 + 4 + 5;', {
  plugins: [
    require('./index')
  ]
})

console.log(result.code)

// 表达式（表达式（+3）+ 4）