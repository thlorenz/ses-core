'use strict';

var renderView = require('./render-view');

/**
 * Compiles the given `.hbs` view with the given context and responds with the resulting html.
 * 
 * Example: app.use(core.renderViewMiddleware(viewPath, { title: 'sleep' }));
 *
 * @name exports
 * @function
 * @param viewPath {String} path to the `.hbs` template
 * @param context {Object} used when compiling the template
 */
var go = module.exports = function (viewPath, context) {
  return function (req, res, next) {
    renderView(viewPath, context, function (err, html) {
      if (err) return next(err);
      res.set({ 'Content-Type': 'text/html' });
      res.send(200, html);
    });
  };
};
