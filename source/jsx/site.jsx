"use strict";

// Import third party dependencies.
import React from "react";
import Perf from 'react-addons-perf';
import ReactDOM from "react-dom";
import log from "loglevel";

// Import dependencies.
import Root from "containers/Root.jsx";
import "site.scss";

// Configure logging.
if(__DEV__)
	log.setLevel(log.levels.DEBUG);
else
	log.setLevel(log.levels.ERROR);

// Configure React performance tools.
if(__DEV__)
	window.Perf = Perf;

// Render root component.
const root = document.getElementById("root");
const render = function(component, root)
{
	ReactDOM.render(component, root);
};
render(<Root />, root);

// Configure React hot reloading.
if(module.hot)
	module.hot.accept("./containers/Root", Root);
