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