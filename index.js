var Hapi = require('hapi');
var server = Hapi.createServer('localhost', Number(process.argv[2] || 8080));
  
// hello hapi
server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
        reply('Hello Hapi');
    }
});

// params
server.route({
  path: '/{name}/{veg}', 
  method:'GET', 
  handler:function(request, reply){
    reply('Hello ' + request.params.name + 
      ', have some ' + request.params.veg + '!');
  }
});

// file serving
server.route({
  path: '/serveindex', 
  method:'GET', 
  handler: {
    file: "index.html"
  }
});

server.start();