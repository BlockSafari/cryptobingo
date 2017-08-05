let ExtractTextPlugin = require("extract-text-webpack-plugin");
let autoprefixer = require("autoprefixer");
let UglifyJSPlugin = require("uglifyjs-webpack-plugin");
let webpack = require("webpack");
let babelConfig = require("../../.babelrc.json");

const postCssLoader = {
	loader: "postcss-loader",
	options: {
		plugins: [
			autoprefixer
		]
	},
};

module.exports = {
	rules: {
		style: {
			extractStyles: {
				test: /\.[s]?css$/,
				use: ExtractTextPlugin.extract({
					fallback: "style-loader",
					use: [
						{loader: "css-loader", options: {minimize: true}},
						postCssLoader,
						"resolve-url-loader",
						"sass-loader",
					]
				})
			},
			inline: {
				test: /\.[s]?css$/,
				use: [
					"style-loader",
					{loader: "css-loader", options: {sourceMap: false}},
					postCssLoader,
					"resolve-url-loader",
					{loader: "sass-loader", options: {sourceMap: false}}
				]
			}
		},
		javascript: {
			propTypes: {
				test: /\.js[x]?$/,
				exclude: /(node_modules|bower_components)/,
				use: [{
					loader: "babel-loader",
					options: babelConfig
				}]
			},
			stripPropTypes: {
				test: /\.js[x]?$/,
				exclude: /(node_modules|bower_components)/,
				use: [{
					loader: "babel-loader",
					options: Object.assign(
						{},
						babelConfig,
						{
							plugins: [
								...babelConfig.plugins,
								// In production, prop types are an unnecessary overhead.
								"transform-react-remove-prop-types"
							]
						})
				}]
			}
		}
	},
	plugins: {
		minification: [
			new UglifyJSPlugin(
				{
					"compilerOptions": {
						"target": "es5",
						"lib": ["dom", "es6"]
					}
				}
			)
		],
		extractStyles: [
			new ExtractTextPlugin("bundle.css")
		]
	},
	environmentPlugin: function({stage = "dev"})
	{
		let pluginOpts;

		switch(stage)
		{
			case "dev":
			{
				pluginOpts = {
					__DEV__: "true",
					__STAGE__: "false",
					__PROD__: "false",
				};
				break;
			}
			case "stage":
			{
				pluginOpts = {
					__DEV__: "false",
					__STAGE__: "true",
					__PROD__: "false",
				};
				break;
			}
			case "prod":
			{
				pluginOpts = {
					__DEV__: "false",
					__STAGE__: "false",
					__PROD__: "true",
				};
				break;
			}
			default:
				throw new Error(`Unknown stage ${stage}`);
		}

		pluginOpts["process.env"] = {
			NODE_ENV: stage === "dev" ? '"development"' : '"production"'
		};

		return new webpack.DefinePlugin(pluginOpts);
	}
};