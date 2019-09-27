const http = require('http')
const Koa = require('koa');
const Router = require('koa-router')

const app = new Koa();

const router = new Router()
router.prefix('/api')
router.get('/test', async(ctx, next) => {
        await next();
        ctx.response.type = 'text/html';
        ctx.response.body = '<h1>Hello, koa2!</h1>';
    });

app.use(router.routes(), router.allowedMethods())

const server = http.createServer(app.callback());
server.listen(3000);

console.log('app started at port 3000...');

