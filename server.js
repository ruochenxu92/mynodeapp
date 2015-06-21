var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();


// configure app
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));







// use middleware
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/')));




// define routes
app.use(require('./todos'));   //use own folder

// start he server
app.listen(3000, function() {
	console.log("ready on port 3000")
});


// server.listen(8000,'127.0.0.1',function(){
//  server.close(function(){
//    server.listen(8001,'192.168.0.202')
//  })
// })






















// var http = require('http');
// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/plain'});
//   res.end('Hello World\n');
// }).listen(1337, '127.0.0.1');
// console.log('Server running at http://127.0.0.1:1337/');