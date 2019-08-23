import React, { Component } from 'react';
class Experience extends Component {
	render() {
		return (
			<section id="experience">
				<div className="container h-100">
					<div className="row h-100 pt-5 justify-content-center">
						<div className="col-md-12">
							<h1>Experience</h1>
						</div>
						<div className="col-md-4 d-flex align-items-center justify-content-center">
							<div className="text-center">
								<img src="/assets/images/smart-logo.png" alt="smart-logo" />
								<h5 className="mt-2 mb-0">
									Smart Production LLC<br />
									Front End Developer
								</h5>
								<p className="text_blue">March 2017 - March 2019</p>
							</div>
						</div>
						<div className="col-md-4 d-flex align-items-center justify-content-center">
							<div className="text-center">
								<img src="/assets/images/hikeArmenia-logo.png" alt="hikeArmenia-logo" />
								<h5 className="mt-2 mb-0">
									HIKEArmenia<br />
									Freelancer
								</h5>
								<p className="text_blue">March 2019 - Present</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}
export default Experience;
