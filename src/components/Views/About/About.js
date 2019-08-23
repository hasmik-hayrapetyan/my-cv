import React, { Component } from 'react';
import AboutMe from './AboutMe';
import LinkedinBtn from '../../Buttons/LinkedinBtn';
import UserInfo from '../../User/UserInfo';
class About extends Component {
	render() {
		return (
			<section id="about">
				<div className="container h-100">
					<div className="row align-items-center h-100 d-flex">
						<div className="col-md-4">
							<h1>
								{UserInfo.userName} <br />{UserInfo.userSurName}
							</h1>
							<AboutMe userInfo={UserInfo} />
							<LinkedinBtn />
						</div>
					</div>
				</div>
			</section>
		);
	}
}
export default About;
