import React from 'react';
import WeatherForm from '../components/WeatherForm'
import Weather from '../components/Weather'

class WeatherContainer extends React.Component {

    render() {
        return(
            <div className="weather-container">
                <div>
                    <WeatherForm />
                </div>
                <Weather weather={this.props.user && this.props.user.weather}/>
            </div>
        )
    }
}

export default WeatherContainer