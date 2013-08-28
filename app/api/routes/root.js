'use strict';

var go = module.exports = function (app, restify) {
  app.get('/', function (req, res) {
    var body ='<p>Welcome to the see-eat-sleep - API server</p> <p><a href="/routes">API Routes</a></p>';
    res.writeHead(200, {
      'Content-Length': Buffer.byteLength(body),
      'Content-Type': 'text/html'
    });
    res.write(body);
    res.end();
  });
};
