# Webpack Extension Count Plugin

A plugin for Webpack that outputs the number of collected files by extensions.

## Installation

```
npm i webpack-count-files-by-extensions-plugin
```

## Usage

1. In the file `webpack.config.js` of your project connect the plugin and add it to the `plugins` array:

```js
const CountFilesByExtensionsPlugin = require('webpack-count-files-by-extensions-plugin');

module.exports = {
  // ...
  plugins: [
    // ...
    new CountFilesByExtensionsPlugin(),
  ],
};
```
