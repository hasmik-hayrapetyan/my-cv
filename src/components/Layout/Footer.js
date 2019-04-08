import React, { Component } from 'react';
import SocIcons from '../SocIcons/SocIcons';
import Email from '../Email/Email';

class Footer extends Component {
	render() {
		return (
			<footer id="footer">
				<div className="container py-3">
					<div className="row">
						<div className="col-md-12 text-center">
							<SocIcons />
						</div>
						<div className="col-md-12 text-center">
							<Email />
						</div>
					</div>
				</div>
			</footer>
		);
	}
}
export default Footer;
