# GeoDash Flatten (geodash-flatten)

The `flatten` function for [GeoDash](http://geodash.io) that can be used in build or runtime contexts.

## GeoDash

GeoDash is a modern web framework and approach for quickly producing visualizations of geospatial data. The name comes from "geospatial dashboard".

The framework is built to be extremely extensible. You can use GeoDash Server (an implementation), the front-end framework, backend code, or just the Gulp pipeline. Have fun!

See [http://geodash.io](http://geodash.io) for more details.

# Install

Install with [npm](https://npmjs.org/package/geodash-flatten)

```
npm install geodash-flatten --save-dev
```

# Usage

The `flatten` function can be used independently or as `geodash.util.flatten` in [GeoDashJS](https://github.com/geodashio/geodash.js).

The `flatten` function is used frequently in conjunction with the [diff](https://www.npmjs.com/package/geodash-diff), [expand](https://www.npmjs.com/package/geodash-expand), and [extract](https://www.npmjs.com/package/geodash-extract) functions.  Flatten transforms a serializable JSON object, so that all values are under the root object.  For example

**Independently**

```
var flatten = require("geodash-flatten")
var a = {'x': {'y': 'z' }, 'a': ['b', 'c', 'd']}
var b = fatten(a);
b == {'x__y': 'z', 'a__0': 'b', 'a__1': 'c', 'a__2': 'd' }
```

**In GeoDashJS**

```
$scope.dashboard_flat = geodash.util.flatten($scope.dashboard);
```

# Building

## docs

To build the custom docs template used in the website, you'll need to install a custom version of docstrap.git on top of the default version.  The below command will install the custom version.

```
npm install git+https://git@github.com/geodashio/docstrap.git\#geodash # Install custom docs template with font awesome
```

You can just build docs with:
```
npm run build:docs # or gulp docs since run the same thing
```

# Tests

Only [jshint](http://jshint.com/about/) is supported right now.  Run tests with the following command.

```
npm run tests
```

# Contributing

Happy to accept pull requests!

# License

See `LICENSE` file.
