'use strict';

/**
 * Initializes browserify instance and adds and exposes certain client side libraries with it.
 * Supply in the appup-config: `exports.initBrowserify = core.initBrowserify;`
 *
 * jquery is exposed in order to be able to do `var $ = require('jquery');`
 * backbone and underscore are exposed here in order to include them only once in the bundle for two reasons:
 *  - smaller bundle
 *  - it is desirable to use the same backbone instance across the entire application
 *
 * Exposing backbone and underscore is not necessary when installing all dependencies and running `npm dedupe` 
 * afterwards, however in order to support linking of dependencies it is advisable to explicitly expose them here.
 * 
 * @name exports
 * @function
 * @return {Object} browserify instance
 */
var go = module.exports = function (browserify) {
  var s = browserify()
    .require(require.resolve('./expose-jquery'), { expose: 'jquery' })
    .require(require.resolve('underscore'), { expose: 'underscore' })
    .require(require.resolve('backbone'), { expose: 'backbone' })
    ;
  return s;
};
