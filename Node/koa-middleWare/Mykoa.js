class Koa {
  constructor() {
    this.middleWare = []
  }
  use(fn) {
    this.middleWare.push(fn)
    return this;
  }
  run() {
    // application compose: 中间件
    // dispatch(0)
    const dispatch = (i) => {
      let fn = this.middleWare[i]
      if(!fn) return Promise.resolve()
      /**
        async (ctx, next) => {
          console.log(1);
          await next();
          console.log(2);
        })
      */
      //  fn use 进来函数 ctx next
      // fn({ctx: 'ctx'}, () => {
      //   // next
      //   return dispatch(i + 1);
      // })
      // 剩余的
      // 2
      return Promise.resolve(fn({ctx: 'ctx'}, () => {
        // next
        return dispatch(i + 1);
      }))
    }
    dispatch(0)
  }
}

// es-module js
// export default Koa  不支持

// node common.js
module.exports = Koa