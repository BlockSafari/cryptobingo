"use strict";

// Import third party dependencies.
import React from "react";
import {HashRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import * as _ from "lodash";
import uuid from "uuid/v4";

// Import dependencies.
import * as constants from "../common/constants.jsx";
import Footer from "./Footer/Footer.jsx";
import Grid from "./Grid/Grid.jsx";
import Header from "./Header/Header.jsx";
import "./Root.scss";

export default class Root extends React.Component
{
	constructor(props)
	{
		super(props);

		// Set initial state.
		this.state =
		{
			redirectTo: null
		};
	}

	componentDidUpdate()
	{
		// Update the state to prevent looping.
		if(this.shouldRedirect(this.state))
			this.setState({redirectTo: null});
	}

	/**
	 * Generates a Grid component.
	 * @param {object} match A match object from a React Router Route.
	 * @returns {Grid} An instance of Grid.
	 */
	generateGrid = ({match}) =>
	{
		return <Grid sizeX={constants.gridSize.x} sizeY={constants.gridSize.x} seed={match.params.seed} />;
	};

	/**
	 * Trigger a redirect to a new random seed.
	 * @param {object} e An optional event object.
	 * @return {void}
	 */
	randomizeSeed = (e) =>
	{
		// Prevent default action.
		if(e && _.isFunction(e.preventDefault))
			e.preventDefault();

		// Set the state redirectTo value to a random uuid seed.
		this.setState({redirectTo: uuid()});
	};

	/**
	 * Determine if a redirect should be performed.
	 * @param {object} state A provided state object.
	 * @returns {boolean} True if a redirect should be performed.
	 */
	shouldRedirect(state)
	{
		return state.redirectTo && _.isString(state.redirectTo) && state.redirectTo.length > 0;
	}

	render()
	{
		// Check for redirection or normal rendering.
		if(this.shouldRedirect(this.state))
		{
			// Render a Redirect.
			const html =
			(
				<Router>
					<div>
						<Redirect to={uuid()} />
					</div>
				</Router>
			);
			return html;
		}
		else
		{
			// Render normally.
			const html =
			(
				<Router>
					<div className="wrapper">
						<Header />

						<Switch>
							<Redirect exact from="/" to={uuid()} />
							<Route path="/:seed" component={this.generateGrid} />
						</Switch>

						<Footer onGenerateClicked={this.randomizeSeed} />
					</div>
				</Router>
			);
			return html;
		}
	}
}
