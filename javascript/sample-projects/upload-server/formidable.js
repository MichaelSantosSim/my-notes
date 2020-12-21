var formidable = require('formidable');
var http = require('http');

var finalhandler = require('finalhandler');
var serveStatic = require('serve-static');

var serve = serveStatic("./pages");


let storedFiled = {};

http.createServer(function (req, res) {
  if (req.url == '/fileupload') {
    var form = new formidable.IncomingForm();
    
    form.parse(req, function (err, fields, files) {

      console.log(`POST: ${Object.entries(fields).map(a => `${a[0]} : ${a[1]}`).join('\n')}`)

      res.writeHead(200, {'Content-type':'application/json'});
      res.write("DONE!");
      res.end();
    });
  } else {
    var done = finalhandler(req, res);
    serve(req, res, done);
  }
}).listen(8080);