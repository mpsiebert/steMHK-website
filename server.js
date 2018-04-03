var http = require('http')
var fs = require('fs')
var url = require('url')


// create the Server
http.createServer( function(req, res) {
  // parse the request containing the file name
  var pathname = url.parse(req.url).pathname;

  // print the name of the file for which the request is made
  console.log("Request for" + pathname + " received.");

  // read the request file content from file system
  fs.readFile(pathname.substr(1), function(err, data) {
    if(err) {
      console.log(err);
      // HTTP Status: 404 : NOT FOUND
      // Content Type: text/plain
      res.writeHead(404, {'Content-Type': 'text/html'});
    }else{
      // Page FOUND
      // HTTP Status: 200 : OK
      // Content Type: text/plain
      res.writeHead(200, {'Content-Type': 'text/html'});

      // write the content of the file to response body
      res.write(data.toString());
    }
    // send response body
    res.end();
  });
}).listen(8081);

// console will print the message
console.log('Server running at http://127.0.0.1:8081/');
