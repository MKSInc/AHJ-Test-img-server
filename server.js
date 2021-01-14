const path = require('path');
// const fs = require('fs');
const Koa = require('koa');
const koaBody = require('koa-body');
const koaStatic = require('koa-static');

const app = new Koa();
const PORT = process.env.PORT || 3000;
const dirPublic = path.join(__dirname, 'public');

app.use(koaBody({
  urlencoded: true,
  multipart: true,
}));

app.use(koaStatic(dirPublic));

app.use(async (ctx) => {
  console.log('request.url', ctx.request.url);
  console.log('request.query', ctx.request.query);
  console.log('request.querystring', ctx.request.querystring);

  const response = {
    success: true,
    data: '',
  };

  if (ctx.request.method === 'POST') {
    console.log('ctx.request.body', ctx.request.body);
    console.log('ctx.request.body.description', ctx.request.body.description);
    console.log('ctx.request.body.file', ctx.request.body.file);
    console.log('ctx.request.body.files', ctx.request.body.files);
    response.data = 'POST';
  } else {
    response.data = '<h1>test</h1>';
  }

  ctx.body = response;
});

// eslint-disable-next-line no-console
app.listen(PORT, () => console.log(`Koa server has been started on port ${PORT} ...`));
