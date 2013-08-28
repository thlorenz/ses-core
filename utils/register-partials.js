'use strict';

var fs = require('fs');
var Handlebars = require('handlebars');

/**
 * Registers all partials that are exposed by this package with handlebars.
 * Note that this happens on server startup which is why sync IO is ok.
 *
 * @name exports
 * @param partialsDir {String} path that contains the partials (*.hbs) to register
 * @param prefix {String} prefix to use when registering partials (i.e. 'ses-see-')
 * @function
 */
var go = module.exports = function (partialsDir, prefix) {
  if (typeof partialsDir !== 'string') throw new Error('need to supply path to partials directory');
  if (typeof prefix !== 'string') throw new Error('need to supply a feature prefix');

  fs.readdirSync(partialsDir)
    .forEach(function (file) {
      var fullPath = require.resolve(partialsDir + '/' + file);
      var name = file.slice(0, -4); // .hbs has four chars
      var id = prefix + name;

      var tmpl = fs.readFileSync(fullPath, 'utf8');

      Handlebars.registerPartial(id, tmpl);
    });
};
