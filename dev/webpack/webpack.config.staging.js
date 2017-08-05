let config = require("./webpack.config.js");
let common = require("./common");

// Configure staging environment
config.plugins.push(common.environmentPlugin({stage: "stage"}));

// In staging, we want to extract all styles so that the javascript bundle and styles can be loaded in parallel.
// We"re mimicing the production build
config.module.rules.push(common.rules.style.extractStyles);
common.plugins.extractStyles.map(p => config.plugins.push(p));

// In staging all bundles should be minified (as we"re mimicing production.
common.plugins.minification.map(p => config.plugins.push(p));

// In staging, propTypes are an unnecessary overhead
config.module.rules.push(common.rules.javascript.stripPropTypes);

module.exports = config;