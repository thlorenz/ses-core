'use strict';

var fs = require('fs');
var Handlebars = require('handlebars');

/**
 * Compiles the given `.hbs` view with the given context and calls back with the resulting html.
 * 
 * @name exports
 * @function
 * @param viewPath {String} path to the `.hbs` template
 * @param context {Object} used when compiling the template
 * @param cb {Function} (err, html) calls back with error or resulting html.
 */
module.exports = function (viewPath, context, cb) {
  fs.readFile(viewPath, 'utf8', function (err, tmpl) {
    if (err) return cb(err);
    var html = Handlebars.compile(tmpl)(context);
    cb(null, html);
  });
};
