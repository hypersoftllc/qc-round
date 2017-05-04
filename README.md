# qc-round

Rounds a number to a specified number of decimal places.

[![Build Status](https://travis-ci.org/hypersoftllc/qc-round.svg?branch=master)](https://travis-ci.org/hypersoftllc/qc-round)

**Note**: This package is written in [TypeScript] and so will need to be transpiled into JavaScript.  This does not
mean that it can't be used with a [JavaScript] or [CoffeeScript] -based project.

## Usage

```sh
npm install --save qc-round
```

## Transpiling

There are many ways to transpile your project's code and its dependencies.  In all cases, you will need the TypeScript
compiler when this package is a dependency.

**Add TypeScript Compiler as a Dependency to Your Project**

```sh
npm install --save-dev typescript
```
You will also need a TypeScript configuration tailored to your project.

**An Example TypeScript Configuration**

**Note**: This configuration is highly dependent on the needs of your particular project. The following is only an
example. See http://www.typescriptlang.org/docs/handbook/tsconfig-json.html for further help.

**tsconfig.js**
```json
{
  "compilerOptions": {
    "lib": [
      "dom",
      "es6"
    ],
    "module": "commonjs",
    "noImplicitAny": true,
    "outDir": "./dist/",
    "pretty": true,
    "target": "es3"
  },
  "include": [
    "./src/**/*"
  ]
}
```

The following demonstrates how to use [webpack] to transpile your project's code.

### webpack

webpack can bundle files written in JavaScript, CoffeeScript, TypeScript, et al, all into a single (or multiple)
JavaScript bundle.

**Add webpack as a Dependency to Your Project**

```sh
npm install --save-dev webpack
```

Since your package depends on `qc-round` which is written in TypeScript, you will need a webpack loader that knows
how to transpile TypeScript to JavaScript. One such loader is [awesome-typescript-loader].

**Add a TypeScript webpack loader Dependency to Your Project**

```sh
npm install --save-dev awesome-typescript-loader
```

Your package will also need configuration for webpack and the TypeScript compiler.

**An Example webpack Configuration**

Use the following example or merge with an existing webpack configuration.

```js
module.exports = {

  entry: '/path/to/your/package/entry/point',

  output: {
    filename: 'your-package.js',
    path: __dirname + '/dist'
  },

  resolve: {
    // Add '.ts' as a resolvable extension along with any other extensions necessary for your package.
    extensions: ['.js', '.json', '.ts']
  },

  module: {
    rules: [
      // All files with a '.ts' extension will be handled by 'awesome-typescript-loader'.
      { test: /\.ts$/, loader: 'awesome-typescript-loader' }
    ]
  }

};
```

Once all of this is in place, you just need to run webpack. One way to run webpack is to add or tweak a build script
in your NPM package.json file.

**Add/Update the package.json build Script**

```js
...
  "scripts": [
    ...
    "build": "webpack"
    ...
  ],
...
```

Now you can run the following

```sh
npm run build
```


[awesome-typescript-loader]: https://www.npmjs.com/package/awesome-typescript-loader
[CoffeeScript]: http://coffeescript.org/
[JavaScript]: https://developer.mozilla.org/en-US/docs/Web/JavaScript
[TypeScript]: https://www.typescriptlang.org/ "TypeScript - JavaScript that scales"
[webpack]: https://webpack.github.io/ "webpack module bundler"
