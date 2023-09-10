const API_KEY = '6f410ab95ca34f50a6472401230208';
const WEATHER_CITY_URL = 'http://api.weatherapi.com/v1/current.json'



export const fetchWeatherCity = async (city, showAirQuality) => {
    const url = new URL(WEATHER_CITY_URL);

    url.searchParams.append('key', API_KEY);
    url.searchParams.append('q', city);
    url.searchParams.append('aqi', showAirQuality ? 'yes' : 'no');
    const response = await fetch(url);
    const data = await response.json();

    if (data.error) {
        throw new Error(data.error.message);
    }

    return data;
};