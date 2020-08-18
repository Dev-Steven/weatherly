import React from 'react';
import './CurrentWeather.css';

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
		<div className='card-component'>
			<div
				className='card text-white bg-dark mb-3 card-opacity'
				style={{ maxWidth: '18rem' }}
			>
				<div className='card-header text-center'>
					{name}, {sys.country}
				</div>
				<div className='card-body'>
					<div className='container'>
						<div className='row'>
							<div className='col'>
								{renderIcon(weather[0].description)}
							</div>
							{/* <div className='w-100'></div> */}
							<h3
								className='col card-title text-center'
								// style={{ padding: '70px 0' }}
							>
								{convertKevlinToFarenheit(main.temp)}
								<span>&#176;</span>F
							</h3>
						</div>
					</div>
					<p className='card-text text-center'>
						{weather[0].description}
						<br />
						Wind: {wind.speed}mph
					</p>
				</div>
			</div>
		</div>
	);
};

export default CurrentWeather;
