import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './style/Navigation.css';

var navBar = [
	{ href: '/', title: 'About me' },
	{ href: '/experience', title: 'Experience' },
	{ href: '/education', title: 'Education' },
	{ href: '/skills', title: 'Skills' },
	{ href: '/portfolio', title: 'Portfolio' },
	{ href: '/contacts', title: 'Contacts' }
];

class Navigation extends Component {
	render() {
		return (
			<nav className="navbar navbar-expand-lg navbar-light pb-0">
				<button
					className="navbar-toggler ml-auto"
					type="button"
					data-toggle="collapse"
					data-target="#navbarTogglerDemo03"
					aria-controls="navbarTogglerDemo03"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon" />
				</button>

				<div className="collapse navbar-collapse" id="navbarTogglerDemo03">
					<ul className="navbar-nav ml-auto mt-2 mt-lg-0 text-right">
						{navBar.map((menu, index) => (
							<li key={++index} className="nav-item">
								<NavLink
									onClick={this.handleClick}
									exact
									activeClassName="active-menu"
									className="nav-link text-white text-capitalize pb-0"
									to={menu.href}
								>
									{menu.title}
								</NavLink>
							</li>
						))}
					</ul>
				</div>
			</nav>
		);
	}
}
export default Navigation;
