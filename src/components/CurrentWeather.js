import React from 'react';
import './CurrentWeather.scss';

export const convertKevlinToFarenheit = k => {
	return Math.round((k - 273.15) * 1.8 + 32);
};

const CurrentWeather = ({
	currentWeather: {
		name,
		main,
		main: { feels_like, humidity, temp, temp_max, temp_min },
		sys,
		sys: { country, sunrise, sunset },
		weather,
		wind,
		wind: { deg, speed },
	},
}) => {
	const renderIcon = icon => {
		return (
			<img
				src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
				alt='broken clouds'
				style={{ width: '85px', height: '85px' }}
			/>
		);
	};

	return (
		<div className='text-center'>
			<div className='day-card'>
				<h4 className='text-center'>
					{name}, {sys.country}
				</h4>
				<div className='container'>
					<div className='row'>
						<div className='col'>
							<img
								src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
								alt='broken clouds'
								style={{ width: '120px', height: '120px' }}
							/>
						</div>
						<h2 className='col text-center degrees'>
							{convertKevlinToFarenheit(main.temp)}
							<span>&#176;</span>F
						</h2>
					</div>
				</div>
				<p className='text-center'>
					{weather[0].description}
					<br />
					Wind: {wind.speed}mph
				</p>
			</div>
		</div>
	);
};

export default CurrentWeather;
