var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  console.log("check server");
  let a = 10;
  let b = 20;
  let c = a + b;
  let d = b - a;
  let e = a * b;
  let f = b / a;
  console.log(c);

  console.log("Request received at: " + new Date().toLocaleTimeString());
  res.end(f + '<script>console.log("Hello World!");</script>');
}).listen(8081, () => {
    console.log("Server running at http://localhost:8081/");
  });
