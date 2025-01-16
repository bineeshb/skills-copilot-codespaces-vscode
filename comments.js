// Create web server
// Create a web server that listens on port 8080. When you visit http://localhost:8080, it should display the message "Hello, World!".

const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/plain',
  });

  res.end('Hello, World!');
});

server.listen(8080, () => {
  console.log('Server is running...');
});