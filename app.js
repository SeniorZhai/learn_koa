const Koa = require('koa')

const app = new Koa()


app.use( async ( ctx ) => {
  if (ctx.url === '/index') {
    ctx.cookies.set(
      'cid',
      'hello world',
      {
        domain:'localhost', // 所在域名
        path:'/index', // 所在路径
        maxAge: 10 * 60 *1000, // 有效时长
        expires: new Date('2018-05-01'), // 失效时间
        httpOnly:false, // 只用于http请求
        overwrite:false // 不允许重写
      }
    )
    ctx.body = 'cookie is ok'
  }else {
    ctx.body = 'hello world'
  }
})

app.listen(3000)
console.log('staring at port 3000')