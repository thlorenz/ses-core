# ses-core 
The core module for the see-eat-sleep application.

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
 * Note that this happens on server startup which is why sync IO is ok.
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

