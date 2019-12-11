import express from 'express';
const app = new express();

/*
*构建在 虚拟 dom之上的 服务器渲染
*{name: '', age: ''}  想象一个人的结构
*{tag: '', attribute: , children: [], class: ''}    想象一个节点的结构
*/
app.get('*', (req, res) => {
  res.send(`
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
  </head>
  <body>
    <div id="app">hello express server</div>
  </body>
  </html>
  `)
})

app.listen(3000, () => {
  console.log('express server is running 3000');
})
