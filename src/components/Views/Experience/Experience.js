import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Experience extends Component {
	render() {
		return (
			<section id="experience">
				<div className="container h-100">
					<h1>experience</h1>
					<span className="fa-stack fa-2x">
						<i className="fas fa-circle fa-stack-2x" />
						<FontAwesomeIcon icon="fax" />
					</span>
					<i className="fab fa-facebook-f" />
					<iframe src="http://smartproductionllc.com/" height="500" width="100%" />
				</div>
			</section>
		);
	}
}
export default Experience;
