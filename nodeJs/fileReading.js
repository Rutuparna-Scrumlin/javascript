

var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'demo.txt');
console.log(`Trying to read: ${filePath}`);

fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    console.log(data);
    res.end(data);
});
  
}).listen(8080, () => {
    console.log("Server running at http://localhost:8080/");
  });
