export const searchedCity = city => {
	return {
		type: 'CITY_SEARCHED',
		payload: city,
	};
};
