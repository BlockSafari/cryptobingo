"use strict";

// Import third party dependencies.
import * as React from "react";
import PropTypes from "prop-types";
import seedrandom from "seedrandom";

// Import dependencies.
import GridTile from "./GridTile.jsx";
import "./Grid.scss";
import {getRandomIntWithRng} from "../../common/utils";

export default class Grid extends React.PureComponent
{
	static propTypes =
	{
		seed: PropTypes.string.isRequired,
		sizeX: PropTypes.number.isRequired,
		sizeY: PropTypes.number.isRequired
	};

	constructor(props)
	{
		super(props);

		// Initialize instance variables.
		this.rng = null;
	}

	generateRandomNumberGenerator(seed)
	{
		const rng = seedrandom(seed);

		const nextRandomNumber = () =>
		{
			return getRandomIntWithRng(rng);
		};
		return nextRandomNumber;
	}

	initializeRandomNumberGenerator = () =>
	{
		this.rng = this.generateRandomNumberGenerator(this.props.seed);
	};

	renderGridRows = (size) =>
	{
		let rows = [];

		for(let i = 0; i < size; ++i)
		{
			const html =
			(
				<div className="gridRow" key={i}>
					{this.renderGridTiles(this.props.sizeY)}
				</div>
			);
			rows.push(html);
		}

		return rows;
	};

	renderGridTiles = (size) =>
	{
		let tiles = [];

		for(let i = 0; i < size; ++i)
		{
			tiles.push(<GridTile key={i} phraseId={this.rng()} />);
		}

		return tiles;
	};

	render()
	{
		// Initialize the random number generator during each render to keep the values consistent from the seed after an update (URL change).
		this.initializeRandomNumberGenerator();

		const html =
		(
			<div className="grid">
				<div className="gridRowContainer">
					{this.renderGridRows(this.props.sizeX)}
				</div>
			</div>
		);
		return html;
	}
}
