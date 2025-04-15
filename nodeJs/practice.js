var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  console.log("check server");
  let a = 10;
  let b = 20;
  let c = a + b;
  console.log(c);

  console.log("Request received at: " + new Date().toLocaleTimeString());
  res.end('Hello World!'+c);
}).listen(8080, () => {
    console.log("Server running at http://localhost:8080/");
  });
