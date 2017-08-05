"use strict";

// Import third party dependencies.
import * as React from "react";

// Import dependencies.
import "./Header.scss";

export default class Header extends React.Component
{
	render()
	{
		const html =
		(
			<header className="header">
				<h1 className="title">CryptoBingo</h1>
			</header>
		);
		return html;
	}
}
