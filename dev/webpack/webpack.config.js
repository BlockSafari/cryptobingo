const path = require("path");

module.exports = {
	entry: {
		bundle: [
			"babel-polyfill", // Tons of polyfills, including generators & async/await as far back as IE8.
			"number-to-locale-string", // Support for toLocaleString() in older browsers.
			"whatwg-fetch", // Polyfill for html5 fetch.
			"./source/jsx/site.jsx"
		]
	},
	output: {
		path: path.join(__dirname, "../../dist"),
		publicPath: "/",
		filename: "[name].js"
	},
	module: {
		rules: []
	},
	plugins: [],
	watchOptions: {
		aggregateTimeout: 500
	},
	resolve: {
		modules: [
			path.resolve("source/jsx"),
			path.resolve("node_modules")
		],
		extensions: [
			".js",
			".jsx"
		]
	}
};
