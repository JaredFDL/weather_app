import './weather.css';
import SearchCity from './searchCity/searchCity';
import { useState } from 'react';
import WeatherResult from './weatherResult/WeatherResult';
import LoadingSpinner from '../spinner/Spinner';
import Card from 'react-bootstrap/Card';


const Weather = () => {
    const [weather, setWeather] = useState();
    const [isLoading, setIsLoading] = useState(false);

    const onSearch = (weatherData) => {
        setWeather(weatherData);
    }



    return (
        <Card className="text-center weather">
            <Card.Header>
                <h1>weather app</h1>
            </Card.Header>
            <Card.Body>
                <SearchCity search={onSearch} setLoading={setIsLoading} />
                {isLoading ? <LoadingSpinner /> : weather && <WeatherResult weatherData={weather} />}
            </Card.Body>
            <Card.Footer className="text-muted">By Jared Feng</Card.Footer>
        </Card>

    );
};

export default Weather;