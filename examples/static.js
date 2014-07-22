var Hapi = require('hapi');
var server = Hapi.createServer('localhost', Number(process.argv[2] || 8080));

// file serving
server.route({
  path: '/serveindex', 
  method:'GET', 
  handler: {
    file: "../index.html"
  }
});


server.start();