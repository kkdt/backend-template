// Resource: https://nodejs.org/en/docs/guides/getting-started-guide/

const http = require('http');

const hostname = '127.0.0.1';
const port = 9001;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end("Hello, I am RANDOM!");
});

server.listen(port, hostname, () => {
  console.log(`Random service running at http://${hostname}:${port}/`);
});
