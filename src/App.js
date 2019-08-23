import React, { Component } from 'react';
import 'popper.js';
import 'jquery';
import 'bootstrap/dist/js/bootstrap.min.js';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCoffee, faCheckSquare, faFax } from '@fortawesome/free-solid-svg-icons';

library.add(faCoffee, faCheckSquare, faFax);
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Layout/Header';
import Routes from './components/Layout/Routes';
import Footer from './components/Layout/Footer';

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<div className="wrapper">
					<Header />
					<Routes />
					<Footer />
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
