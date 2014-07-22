var Hapi = require('hapi');
var path = require('path');

var options = {
  views: {
    path: path.join(__dirname + '/templates'),
    engines: {
      html: require('handlebars')
    },
    helpersPath: 'helpers'
    // all .js files in this directory will be loaded
    // file name will be used as the helper name
  }
};

var server = Hapi.createServer('localhost', Number(process.argv[2] || 8080), options);
  
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

// helpers
  server.route({
    path: '/hapihelpers',
    method: 'GET',
    handler: {
      view: 'usehelpers.html'
    }
  });
  //test by visiting: http://127.0.0.1:8080/hapihelpers?name=kale&suffix=!

server.start();