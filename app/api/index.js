'use strict';

var dirs = require('../../config/directories');
var core = require('../index');
var logRequest = require('log-request');

/**
 * Initializes the app and the restify server with core functionality before the server is listening.
 * Call this from each app that depends on core when it initializes its api.
 * 
 * @name init
 * @function
 * @param app {Object} restify app
 * @param restify {Object} restify module
 */
exports.init = function (app, restify) {
  // TODO: why is this not loggging?
  // app.use(restify.requestLogger());

  app.server.on('request', logRequest);
  core.registerEndpoints(__dirname, 'routes', app, restify);
};

/**
 * Initializes the restify app and server with core functionality after the server is listening
 * Call this from each app that depends on core when it initializes its api.
 * 
 * @name postInit
 * @function
 * @param app {Object} restify app
 * @param server {Object} the restify server
 * @param restify {Object} restify module
 */
exports.postInit = function (app, server, restify) {
};
