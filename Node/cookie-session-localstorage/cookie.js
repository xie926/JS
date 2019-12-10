const Koa = require('koa');
const KoaRouter = require('koa-router')

const app = new Koa();
const router = new KoaRouter();
app.use(router.routes()).use(router.allowedMethods)


let id = 0;
const session = []

router.get('/login', async(ctx, next) => {
  id++;
  let col = {
    id,
    uid
  }
  // session-id
  ctx.cookies.set('login', id, {
    maxAge: 1000 * 6,
    httpOnly: true
  })
  // ctx.cookies.set('name', 'hh', {
  //   maxAge: 1000 * 6,
  //   httpOnly: true
  // })
  ctx.body = 'login success'
})

router.get('/islogin', async(ctx, next) => {
  let login = ctx.cookies.get('login');
  if(login) {
    ctx.body = {
      islogin: true
    }
  }else {
    ctx.body = {
      islogin: false
    }
  }
})

router.get('/', async(ctx, next) => {
  ctx.body = `
    <a href="/login">login</a>
    <a href="/islogin">islogin</a>
  `
})


app.listen(3002, () => {
  console.log(3002);
})