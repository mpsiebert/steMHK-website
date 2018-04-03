var http = require('http')

//options to be used by Request
var options = {
  host: 'localhost',
  port: '8081',
  path: '/index.html'
};

// callback function is used to deal with response
var callback = function(response) {
  // continuously update stream w/ data
  var body = '';
  response.on('data', function(data) {
    body += data;
  });

  response.on('end', function() {
    //data received completely
    console.log(body);
  });
}

// make a request to the Server
var req = http.request(options, callback);
req.end();
