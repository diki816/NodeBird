const express = require('express');
const postRouter = require('./routes/post');
const userRouter = require('./routes/user');
const cors = require('cors');
const db = require('./models');
const passportConfig = require('./passport');

const app = express();

db.sequelize.sync()
  .then(() => {
    console.log('db connected');
  })
  .catch(console.error);

passportConfig();
app.use(cors( {
   origin: '*', 
   credentials: false,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
  
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
app.use('/user', userRouter);

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