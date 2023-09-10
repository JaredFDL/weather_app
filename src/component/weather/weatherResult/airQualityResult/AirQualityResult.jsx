import './AirQualityResult.css';

const toFixedTwoFraction = (value) => {
    return Number.parseFloat(value).toFixed(1);
};

const AirQualityResult = (props) => {
    return (
        <div>
            <h3>Air Quality</h3>
            <ul>
                <li>
                    <p>co: {toFixedTwoFraction(props.airQualityData.co)}</p>
                </li>
                <li>
                    <p>no2: {toFixedTwoFraction(props.airQualityData.no2)}</p>
                </li>
                <li>
                    <p>pm2.5: {toFixedTwoFraction(props.airQualityData.pm2_5)}</p>
                </li>
                <li>
                    <p>pm10: {toFixedTwoFraction(props.airQualityData.pm10)}</p>
                </li>
            </ul>
        </div>
    );
};


export default AirQualityResult;