import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import About from '../Views/About/About';
import Experience from '../Views/Experience/Experience';
import Education from '../Views/Education/Education';
import Skills from '../Views/Skills/Skills';
import Portfolio from '../Views/Portfolio/Portfolio';
import Contacts from '../Views/Contacts/Contacts';

class Routes extends Component {
	render() {
		return (
			<Switch>
				<Route exact activeClassName="current" path="/" component={About} />
				<Route path="/experience" component={Experience} />
				<Route path="/education" component={Education} />
				<Route path="/skills" component={Skills} />
				<Route path="/portfolio" component={Portfolio} />
				<Route path="/contacts" component={Contacts} />
			</Switch>
		);
	}
}
export default Routes;
