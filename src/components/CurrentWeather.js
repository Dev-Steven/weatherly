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
	const renderIcon = description => {
		if (description === 'broken clouds') {
			return (
				<img
					src='https://www.weatherbit.io/static/img/icons/c04d.png'
					alt='broken clouds'
					style={{ width: '85px', height: '85px' }}
				/>
			);
		} else {
			return <p>could not find image</p>;
		}
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
							{renderIcon(weather[0].description)}
						</div>
						<h3 className='col text-center'>
							{convertKevlinToFarenheit(main.temp)}
							<span>&#176;</span>F
						</h3>
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
