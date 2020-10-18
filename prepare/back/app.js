const express = require('express');
const postRouter = require('./routes/post');
const db = require('./models');
const app = express();

db.sequelize.sync()
  .then(() => {
    console.log('db connected');
  })
  .catch(console.error);

  
app.get('/', (req, res) => {
  res.send('Hello express');
});

app.get('/api', (req, res) => {
  res.send('Hello api');
});

app.get('/posts', (req, res) => {
  res.json([
    { id: 1, content: 'hello 1'},
    { id: 2, content: 'hello 2'},
    { id: 3, content: 'hello 3'},
  ]);
});

app.use('/post', postRouter);

app.listen(3065, () => {
  console.log('서버 실행 중');
});

/*
const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);
  res.write('<h1>H1</h1>');
  res.write('<h2>H2</h2>');  
  res.end('Hello node');
});

server.listen(3065, () => {
  console.log('서버 실행 중');
});
*/