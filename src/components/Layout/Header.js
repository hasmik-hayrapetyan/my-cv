import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import Navigation from './Navigation';


class Header extends Component {
	static propTypes = {
		match: PropTypes.object.isRequired,
		location: PropTypes.object.isRequired,
		history: PropTypes.object.isRequired
	}
	render() {
		const { match, location, history } = this.props;
		let pathTitle = location.pathname === '/' ? '/about me' : location.pathname;
		document.title = `Hasmik Hayraetyan / ${pathTitle.charAt(1).toUpperCase() + pathTitle.slice(2)}`;
		const headerColor = location.pathname === '/' ? 'header_home' : 'header';
		return (
			<header className={`${headerColor} sticky-top`}>
				<div className="px-2 px-sm-2 px-ms-2 px-lg-1 px-xl-5">
					<Navigation />
				</div>
			</header>
		);
	}
}
const AdaptiveHeader = withRouter(Header);
export default AdaptiveHeader;
