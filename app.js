const Koa = require('koa')

const loggerAsync = require('./middleware/logger-async')

const app = new Koa()

app.use(loggerAsync())
app.use(( ctx ) => {
		ctx.body = 'hello koa2'
	})

app.listen(3000)
console.log('staring at port 3000')