import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './Nav';
import Search from './Search';
import CurrentWeather from './CurrentWeather';
import axios from 'axios';
import openWeather from '../apis/openWeather';

import './App.css';

class App extends Component {
	state = { city: null };

	searchTerm = async term => {
		const city = await axios.get(
			`${openWeather}/weather?q=${term}&APPID=297e2386527ec5c6a3b26f804d07563e`
		);
		console.log(city.data);
		this.setState({ city: city.data });
	};

	renderCard = () => {
		if (this.state.city != null) {
			return <CurrentWeather city={this.state.city} />;
		} else {
			return <div></div>;
		}
	};

	render() {
		return (
			<div className='main-container'>
				<Nav />
				<Search onSearch={this.searchTerm} />
				{this.renderCard()}
			</div>
		);
	}
}

export default App;
