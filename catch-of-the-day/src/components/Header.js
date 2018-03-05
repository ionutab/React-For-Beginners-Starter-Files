import React from "react";

const Header = props => (
	<header className="top">
		<h1>
			Catch
			<span className="ofThe">
				<span className="of">of</span>
				<span className="the">the</span>
			</span>
			day
		</h1>
		<h3 className="tagline">
			<span>{props.tagline}</span>
		</h3>
	</header>
);

// class Header extends React.Component {
// 	render() {}
// }

export default Header;
