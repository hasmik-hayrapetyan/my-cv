import React, { Component } from 'react';
import Navigation from './Navigation';
import './style/Header.css';

class Header extends Component {
	render() {
		return (
			<header className="header sticky-top">
				<div className="px-2 px-sm-2 px-ms-2 px-lg-1 px-xl-5">
					<Navigation />
				</div>
			</header>
		);
	}
}
export default Header;
