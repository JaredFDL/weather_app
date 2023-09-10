import { fetchWeatherCity } from '../../../services/weatherService';
import './searchCity.css';
import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';



const SearchCity = (props) => {
    const [city, setCity] = useState('');
    const [showAirQuality, setShowAirQuality] = useState(false);
    const [isFormValid, setIsFormValid] = useState(false);
    const [error, setError] = useState('');

    const onCityInputChangeHandler = (event) => {
        const value = event.target.value;
        setCity(value);
        setError('');
        if (value.length >= 2) {
            setIsFormValid(true);
        } else {
            setIsFormValid(false);
        }
    };

    const onSearchCityCityHandler = async (event) => {
        event.preventDefault();
        if (!city) {
            //todo: error handling
            return;
        }

        try {
            props.setLoading(true);
            const weatherData = await fetchWeatherCity(city, showAirQuality);
            props.search(weatherData);
        } catch (error) {
            setError(error.message);
        } finally {
            props.setLoading(false);
        }
    };

    const onCheckBoxChangeHandler = (event) => {
        const isChecked = event.target.checked;
        setShowAirQuality(isChecked);
    };


    return (
        <Form onSubmit={onSearchCityCityHandler}>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control
                    type="text"
                    placeholder="Search a city..."
                    value={city}
                    onChange={onCityInputChangeHandler}
                />
            </Form.Group>
            {error && <Alert variant='danger'>
                {error}
            </Alert>}
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Show air quality data" className='api' onChange={onCheckBoxChangeHandler} />
            </Form.Group>
            <Button variant="primary" type="submit" disabled={!isFormValid}>
                Search
            </Button>
        </Form>
    );

};

export default SearchCity;