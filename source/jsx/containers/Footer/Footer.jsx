"use strict";

// Import third party dependencies.
import * as React from "react";
import PropTypes from "prop-types";

// Import dependencies.
import "./Footer.scss";

export default class Footer extends React.Component
{
	static propTypes =
	{
		onGenerateClicked: PropTypes.func.isRequired
	};

	render()
	{
		const html =
		(
			<footer className="footer">
				<button onClick={this.props.onGenerateClicked}>Randomize Bingo Card</button>
			</footer>
		);
		return html;
	}
}
