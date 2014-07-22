var Hapi = require('hapi');
var path = require('path');

var options = {
  views: {
    path: path.join('../templates'),
    engines: {
      html: require('handlebars')
    },
    helpersPath: '../helpers'
    // all .js files in this directory will be loaded
    // file name will be used as the helper name
  }
};

var server = Hapi.createServer('localhost', Number(process.argv[2] || 8080), options);

// helpers
server.route({
  path: '/hapihelpers',
  method: 'GET',
  handler: {
    view: 'usehelpers.html'
  }
});

server.start();

//test by visiting: http://127.0.0.1:8080/hapihelpers?name=kale&suffix=!