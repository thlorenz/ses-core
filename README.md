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

