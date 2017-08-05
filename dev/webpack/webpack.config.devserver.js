let webpack = require("webpack");
let config = require("./webpack.config.js");
let common = require("./common");
let devTools = require("./devTools");

// In development, for debugging purposes, we require sourcemaps.
config.devtool = devTools.eval;

// Configure dev environment.
config.plugins.push(common.environmentPlugin({stage: "dev", autologin: true}));

// In development we use inline styles to enable hot reloading on style changes.
config.module.rules.push(common.rules.style.inline);

// In development, we want to be able to see propType errors.
config.module.rules.push(common.rules.javascript.propTypes);

// Enable hot reloading.
config.entry.bundle.unshift("react-hot-loader/patch");
// Improve logs after a hot module update - we"ll see the module names instead of numbers.
config.plugins.push(new webpack.NamedModulesPlugin());

module.exports = config;