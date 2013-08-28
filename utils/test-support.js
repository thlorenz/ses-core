'use strict';

var path = require('path');
var fs = require('fs');
var Handlebars = require('handlebars');

var registerPartials = require('./register-partials');

var dirs = require('../config/directories');

/**
 * Returns the html to be used as the fixture for the zuul test runner.
 * Supply it in the zuul-config: `exports.fixture = core.testFixture`
 * 
 * @name fixture
 * @function
 */
exports.fixture = function () {
  registerPartials(dirs.partials, 'ses-core-');

  var tmpl = fs.readFileSync(path.join(dirs.templates, 'index-test.hbs'), 'utf8');
  return Handlebars.compile(tmpl)({});
};

/**
 * Initializes the express app with the necessary dependencies to run the zuul tests.
 * Supply it in the zuul-config: `exports.initApp = core.testInitApp;`
 * 
 * @name initApp
 * @function
 * @param app {Object} express app
 * @param express {Object} express server module
 */
exports.initApp = function (app, express) {
  app.use(express.logger('dev'));

  var sinonpkg = path.join(path.dirname(require.resolve('sinon')), '..', 'pkg', 'sinon.js');
  app.get('/sinon.js', function (req, res) {
    res.sendfile(sinonpkg);
  });

};
