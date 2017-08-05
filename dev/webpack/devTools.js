// https://webpack.github.io/docs/configuration.html#devtool
module.exports = {
	/*
	 Build speed: +++
	 Rebuild speed: +++
	 Production supported: no
	 Quality: generated code
	 */
	eval: "eval",
	/*
	 Build speed: +
	 Rebuild speed: ++
	 Production supported: no
	 Quality: transformed code (lines only)
	 */
	cheapEvalSourceMap: "cheap-eval-source-map",
	/*
	 Build speed: +
	 Rebuild speed: o
	 Production supported: yes
	 Quality: transformed code (lines only)
	 */
	cheapSourceMap: "cheap-source-map",
	/*
	 Build speed: o
	 Rebuild speed: ++
	 Production supported: no
	 Quality: original source (lines only)
	 */
	cheapModuleEvalSourceMap: "cheap-module-eval-source-map",
	/*
	 Build speed: o
	 Rebuild speed: -
	 Production supported: yes
	 Quality: original source (lines only)
	 */
	cheapModuleSourceMap: "cheap-module-source-map",
	/*
	 Build speed: -
	 Rebuild speed: +
	 Production supported: no
	 Quality: original source
	 */
	evalSourceMap: "eval-source-map",
	/*
	 Build speed: -
	 Rebuild speed: -
	 Production supported: yes
	 Quality: original source
	 */
	sourceMap: "source-map",
}