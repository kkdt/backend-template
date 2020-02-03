// Resource: https://nodejs.org/en/docs/guides/getting-started-guide/

const http = require('http');

const hostname = 'localhost';
const port = 9000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end("Hello, I am TIME!");
});

server.listen(port, hostname, () => {
  console.log(`Time service running at http://${hostname}:${port}/`);
});
