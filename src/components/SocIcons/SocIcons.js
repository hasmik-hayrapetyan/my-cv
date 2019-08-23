import React, { Component } from 'react';

class SocIcons extends Component {
	render() {
		return (
			<div>
				<a
					href="https://www.linkedin.com/in/hasmik-hayrapetyan-328829134/"
					className="linkedin_hover d-inline-block"
					target="_blank"
				>
					<span className="fa-stack fa-md">
  						<i className="fas fa-circle text-black fa-stack-2x"></i>
  						<i className="fab fa-linkedin-in fa-stack-1x fa-inverse"></i>
					</span>
				</a>
				<a
					href="https://www.facebook.com/kimsahasmik"
					className="fb_hover d-inline-block"
					target="_blank"
				>
					<span className="fa-stack fa-md">
  						<i className="fas fa-circle text-black fa-stack-2x"></i>
  						<i className="fab fa-facebook-f fa-stack-1x fa-inverse"></i>
					</span>
				</a>
			</div>
		);
	}
}
export default SocIcons;
