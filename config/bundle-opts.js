'use strict';

/**
 * Default browserify bundle opts.
 *
 * Supply in the appup-config: `exports.bundleOpts = core.bundleOpts;`
 *
 * @name bundleOpts
 * @return {Object} 
 */
var go = module.exports = { debug: true, insertGlobals: false };
