# ses-core 

The core module for the [see-eat-sleep application](https://github.com/thlorenz/see-eat-sleep).

**Table of Contents**  *generated with [DocToc](http://doctoc.herokuapp.com/)*

- [API](#api)
  - [Utils](#utils)
    - [registerEndpoints(root, dir, app, servermodule)](#registerendpointsroot-dir-app-servermodule)
    - [registerPartials(partialsDir, prefix)](#registerpartialspartialsdir-prefix)
    - [renderViewMiddleware(viewPath, context)](#renderviewmiddlewareviewpath-context)
  - [App initialization](#app-initialization)
    - [Browserify](#browserify)
      - [initBrowserify(browserify)](#initbrowserifybrowserify)
      - [bundleOpts](#bundleopts)
    - [Pages Server (express)](#pages-server-express)
      - [initPages(app, express, apiServerInfo)](#initpagesapp-express-apiserverinfo)
      - [postInitPagesapp, server, express)](#postinitpagesapp-server-express)
    - [API Server (restify)](#api-server-restify)
      - [initApi(app, restify)](#initapiapp-restify)
      - [postInitApi(app, server, restify)](#postinitapiapp-server-restify)
  - [Test initialization](#test-initialization)
    - [testFixture()](#testfixture)
    - [testInitApp(app, express)](#testinitappapp-express)
- [LICENSE](#license)

## API

### Utils

#### registerEndpoints(root, dir, app, servermodule)

```
/**
 * Inits all modules found in the root/dir with the pages app and express.
 * Each module needs to export a function that takes (app, express) as parameters.
 *
 * @name exports
 * @function
 * @param root {String} full path to root directory
 * @param dir {String} name of subdirectory to initialize modules for
 * @param app {Object} app server instance
 * @param servermodule {Object} express or restify module
 */
```

#### registerPartials(partialsDir, prefix)

```
/**
 * Registers all partials that are exposed by this package with handlebars.
 *
 * @name exports
 * @param partialsDir {String} path that contains the partials (*.hbs) to register
 * @param prefix {String} prefix to use when registering partials (i.e. 'ses-see-')
* @function
 */
```

#### renderViewMiddleware(viewPath, context)

```
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
```

### App initialization

#### Browserify

##### initBrowserify(browserify)
```
/**
 * Initializes browserify instance and adds and exposes certain client side libraries with it.
 * Supply in the appup-config: `exports.initBrowserify = core.initBrowserify;`
 *
 * @name initBrowserify
 * @function
 * @return {Object} browserify instance
 */
```

##### bundleOpts

```
/**
 * Default browserify bundle opts.
 *
 * Supply in the appup-config: `exports.bundleOpts = core.bundleOpts;`
 *
 * @name bundleOpts
 * @return {Object} 
 */
```

#### Pages Server (express)

##### initPages(app, express, apiServerInfo)

```
/**
 * Initializes the express app with core functionality before the server is listening.
 * Call this from each app that depends on core when it initializes its pages.
 * 
 * @name init
 * @function
 * @param app {Object} express app
 * @param express {Object} express module
 * @param apiServerInfo {Object} { address: 'server address info' }
 */
```

##### postInitPagesapp, server, express)

```
/**
 * Initializes the express app with core functionality after the server is listening.
 * Call this from each app that depends on core when it post-initializes its api.
 * 
 * @name postInit
 * @function
 * @param app {Object} express app
 * @param server {Object} espress server
 * @param express {Object} express module
 */
```

#### API Server (restify)

##### initApi(app, restify)

```
/**
 * Initializes the app and the restify server with core functionality before the server is listening.
 * Call this from each app that depends on core when it initializes its api.
 * 
 * @name initApi
 * @function
 * @param app {Object} restify app
 * @param restify {Object} restify module
 */
```

##### postInitApi(app, server, restify)

```
/**
 * Initializes the restify app and server with core functionality after the server is listening
 * Call this from each app that depends on core when it post-initializes its api.
 * 
 * @name postInitApi
 * @function
 * @param app {Object} restify app
 * @param server {Object} the restify server
 * @param restify {Object} restify module
 */
```

### Test initialization

#### testFixture()
```
/**
 * Returns the html to be used as the fixture for the zuul test runner.
 * Supply it in the zuul-config: `exports.fixture = core.testFixture`
 * 
 * @name testFixture
 * @function
 */
```

#### testInitApp(app, express)

```
/**
 * Initializes the express app with the necessary dependencies to run the zuul tests.
 * Supply it in the zuul-config: `exports.initApp = core.testInitApp;`
 * 
 * @name testInitApp
 * @function
 * @param app {Object} express app
 * @param express {Object} express server module
 */
```

# LICENSE

MIT
