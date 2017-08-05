"use strict";

// Import third party dependencies.
import * as React from "react";
import PropTypes from "prop-types";

// Import dependencies.
import {getPhrase} from "../../common/phrases.js";
import {copyToClipboard, isMobileOrTablet} from "../../common/utils.js";
import "./GridTile.scss";

export default class Grid extends React.PureComponent
{
	static propTypes =
	{
		phraseId: PropTypes.number.isRequired
	};

	constructor(props)
	{
		super(props);

		// Initialize instance variables.
		this.gridTileElement = null;
		this.gridTextElement = null;
	}

	/**
	 * Copies the text of the grid tile to the clipboard.
	 * @return {void}
	 */
	copyTextToClipboard = () =>
	{
		copyToClipboard(this.gridTextElement);
	};

	/**
	 * Displays a "Copied!" text indicator within the tile briefly, then removes it.
	 * TODO: Refactor this for better React style.
	 * @return {void}
	 */
	displayCopiedIndicator = () =>
	{
		// Create and append indicator.
		const copiedIndicator = document.createElement("div");
		copiedIndicator.innerHTML = "Copied!";
		copiedIndicator.className = "copiedIndicator showing";
		this.gridTileElement.appendChild(copiedIndicator);

		// Update the class after a tick to hiding.
		setImmediate(() =>
		{
			copiedIndicator.className = "copiedIndicator hiding";
		});

		// Update the class after a tick to hiding.
		setTimeout(() =>
		{
			this.gridTileElement.removeChild(copiedIndicator);
		}, 500);
	};

	/**
	 * Handles a click event on the copy icon.
	 * @param {object} e An event object.
	 * @return {void}
	 */
	handleCopyIconClicked = (e) =>
	{
		// Prevent default action.
		if(e && _.isFunction(e.preventDefault))
			e.preventDefault();

		this.copyTextToClipboard();
		this.displayCopiedIndicator();
	};

	render()
	{
		// Hide copy icon on mobile since it doesn't work.
		// TODO: Fix text copy on mobile.
		const copyIconClass = (isMobileOrTablet()) ? "copyIcon hidden" : "copyIcon";

		const html =
		(
			<div className="gridTile" ref={(ref)=>this.gridTileElement=ref}>
				<img className={copyIconClass} src="static/icons/copy.png" onClick={this.handleCopyIconClicked} />
				<div className="gridText" ref={(ref)=>this.gridTextElement=ref}>
					{getPhrase(this.props.phraseId)}
				</div>
			</div>
		);
		return html;
	}
}
