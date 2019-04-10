import React, { Component } from 'react';
import './Experience.css';
class Experience extends Component {
	render() {
		return (
			<section id="experience">
				<div className="container h-100">
					<div className="row h-100 pt-5">
						<div className="col-md-4 d-flex align-items-center">
							<div>
								<h1>Experience</h1>
								<img src="/assets/images/smart-logo.png" alt="smart-logo"/>
								<h5 className="mt-2 mb-0">
									Smart Production LLC<br />
									Front End Developer
								</h5>
								<p className="text_blue">
									March 2017- March 2019
								</p>
							</div>
						</div>
						<div className="col-md-8">
							<iframe src="http://smartproductionllc.com/" height="100%" width="100%" />
						</div>
					</div>
				</div>
			</section>
		);
	}
}
export default Experience;
