import React, { Component } from 'react';
import { convertKevlinToFarenheit } from './CurrentWeather';
import './DailyForecast.scss';

class DailyForecast extends Component {
	unixToDayConverter = UNIX_timestamp => {
		let day;
		switch (new Date(UNIX_timestamp * 1000).getDay()) {
			case 0:
				day = 'Sunday';
				break;
			case 1:
				day = 'Monday';
				break;
			case 2:
				day = 'Tuesday';
				break;
			case 3:
				day = 'Wednesday';
				break;
			case 4:
				day = 'Thursday';
				break;
			case 5:
				day = 'Friday';
				break;
			case 6:
				day = 'Saturday';
		}
		return day;
	};

	render() {
		// destructure props object
		const {
			dailyWeather: {
				// ignore first element (the current day) then destructure the rest of the array
				daily: [, ...remDays],
			},
		} = this.props;

		return (
			<div className='daily-content'>
				<div className='day-forecast container'>
					<div className='row'>
						{remDays.map(day => (
							<div className='day-card col-sm' key={day.dt}>
								{this.unixToDayConverter(day.dt)}
								<img
									src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
									alt={day.weather[0].description}
								/>
								<p>
									{convertKevlinToFarenheit(day.temp.day)}
									<span>&#176;</span>F
								</p>
							</div>
						))}
					</div>
				</div>
			</div>
		);
	}
}

export default DailyForecast;
