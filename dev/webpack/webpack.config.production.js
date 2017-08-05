let config = require("./webpack.config.js");
let common = require("./common");

// Configure production environment
config.plugins.push(common.environmentPlugin({stage: "prod"}));

// In production, we want to extract all styles so that the javascript bundle and styles can be loaded in parallel.
config.module.rules.push(common.rules.style.extractStyles);
common.plugins.extractStyles.map(p => config.plugins.push(p));

// In production all bundles should be minified
common.plugins.minification.map(p => config.plugins.push(p));

// In production, propTypes are an unnecessary overhead
config.module.rules.push(common.rules.javascript.stripPropTypes);


module.exports = config;