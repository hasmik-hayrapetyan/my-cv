import React, { Component } from 'react';

class AboutMe extends Component {
	render() {
		const userInfo = this.props.userInfo;
		return (
			<div>
				<p>{userInfo.userStudyInfo}</p>
				<p>{userInfo.userWorkInfo}</p>
			</div>
		);
	}
}
export default AboutMe;
