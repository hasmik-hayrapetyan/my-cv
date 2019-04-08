import React, { Component } from 'react';

class SocIcons extends Component {
	render() {
		return (
			<div>
				<a
					href="https://www.linkedin.com/company/inovineteam/about/"
					className="linkedin_hover d-inline-block"
					target="_blank"
				>
					<span className="fa-stack fa-md">
						<i className="fa fa-circle text-black fa-stack-2x" />
						<i className="fa fa-linkedin fa-stack-1x fa-inverse" />
					</span>
				</a>
				<a
					href="https://www.facebook.com/Inovine-402144417219520/"
					className="fb_hover d-inline-block"
					target="_blank"
				>
					<span className="fa-stack fa-md">
						<i className="fa fa-circle text-black fa-stack-2x" />
						<i className="fa fa-facebook fa-stack-1x fa-inverse" />
					</span>
				</a>
			</div>
		);
	}
}
export default SocIcons;
