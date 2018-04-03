var http = require("http")
var fs = require("fs")


// utility modules in Node.js

// used for handling & transforming file paths
var path = require("path")

// used for a few basic operating-system related utility functions
var os = require("os")

// read files
fs.readFile('input.txt', function(err, data) {
  if(err) return console.error(err);
  console.log(data.toString());
});

console.log("Program Ended")

// the file & directory where this file is located
console.log( __filename )
console.log( __dirname )

// creating a basic server
/* http.createServer(function (req, res) {
  // send the http header
  // http status: 200 : OK
  // Content Type: text/plain

  res.writeHead(200, {'Content-Type': 'text/plain'});

  // send the response body as "Hello World"
  res.end('Hello World\n');
}).listen(8081);

// console will print the message
console.log('Server running at http://127.0.0.1:8081/'); */
