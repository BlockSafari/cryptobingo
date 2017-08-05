let config = require("./webpack.config.js");
let common = require("./common");

// Configure dev environment.
config.plugins.push(common.environmentPlugin({stage: "dev"}));

// No need for inline styles when running in development as we"re not using hot reload in this case
config.module.rules.push(common.rules.style.extractStyles);
common.plugins.extractStyles.map(p => config.plugins.push(p));

// In production all bundles should be minified.
// common.plugins.minification.map(p => config.plugins.push(p));

// In production, propTypes are an unnecessary overhead
config.module.rules.push(common.rules.javascript.stripPropTypes);

module.exports = config;