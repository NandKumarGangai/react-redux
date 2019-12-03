import React, { Component } from 'react';
import Routes from './configurations/routes';
import { BrowserRouter as Router } from 'react-router-dom';

class App extends Component {

	render() {
		return (
			<Router>
				<Routes />
			</Router>
		);
	}
}

export default App;
