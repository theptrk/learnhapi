var Hapi = require('hapi');
var server = Hapi.createServer('localhost', Number(process.argv[2] || 8080));
  
server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
        reply('Hello Hapi');
    }
});

server.route({
  path: '/{name}/{veg}', 
  method:'GET', 
  handler:function(request, reply){
    reply('Hello ' + request.params.name + 
      ', have some ' + request.params.veg.toUpperCase() + '!');
  }
});

server.start();