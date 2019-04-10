import React, { Component } from 'react';
import AboutMe from './AboutMe';
import './About.css';
import LinkedinBtn from '../../Buttons/LinkedinBtn';
class About extends Component {
	render() {
		return (
			<section id="about">
				<div className="container h-100">
					<div className="row align-items-center h-100 d-flex">
						<div className="col-md-4">
							<h1>
								Hasmik <br />Hayrapetyan
							</h1>
							<AboutMe />
							<LinkedinBtn />
						</div>
					</div>
				</div>
			</section>
		);
	}
}
export default About;
