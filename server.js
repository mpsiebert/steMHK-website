"use strict";

const PORT = 3000;
const http = require('http');
const fs = require('fs');

function serveIndex(path, res) {
    fs.readdir('public' + path, function(err, files) {
        if(err) {
            console.error(err);
            res.statusCode = 404;
            res.end("Server Error");
        }

        fs.access('index.html', 'r', (err, fd) => {
          serveFile(path, res);
        });

        var html = "<p>Index of " + path + "</p>";
        html += "<ul>";
        html += files.map(function(item){
          console.log(path);
          if(path != "/") {
            return "<li><a href='" + path + '/' + item + "'>" + item + "</a></li>";
          }
          return "<li><a href='" + item + "'>" + item + "</a></li>";
        }).join("");
        html += "</ul>";
        res.end(html);
    });
}

function serveFile(path, res) {
    fs.readFile('public' + path, function(err, data) {
        if(err) {
          console.error(err);
          res.statusCode = 404;
          res.end("File could not be found.");
          return;
        }
        res.end(data);
    });
}

function handleRequest(req, res) {
console.log(req.url);
      fs.stat('public' + req.url, function(err, stats) {
        if(err) {
          res.statusCode = 404;
          res.end("File could not be found.");
        }
        else if(!stats.isFile()) {
          serveIndex(req.url, res);
        }
        else {
          serveFile(req.url, res);

        }
      })
    }

var server = http.createServer(handleRequest);

server.listen(PORT, function(){
    console.log("Listening on port " + PORT);
});
