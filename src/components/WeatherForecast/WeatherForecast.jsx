import './WeatherForecast.css';
import WeatherIcon from './WeatherIcon';
import WeatherData from './WeatherData';

function WeatherForecast({ day, img, imgAlt, conditions, time }) {
  return (
    <div className="weather-forecast-card">
      <WeatherIcon img={img} imgAlt={imgAlt} />
      <WeatherData day={day} conditions={conditions} time={time} />
    </div>
  );
}

export default WeatherForecast;
