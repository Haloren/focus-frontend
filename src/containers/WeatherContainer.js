import React from 'react';

import { connect } from 'react-redux';
import { fetchWeather } from '../redux/actionCreators';

import WeatherUpdate from '../components/WeatherUpdate'
import Weather from '../components/Weather'

class WeatherContainer extends React.Component {
    
    componentDidMount() {
        // console.log("Weather Container", this.props)
        // console.log("User Id", this.props.user.id)
        // console.log("Weather Id", this.props.user.weather.id)

        // let userId = (this.props.user.id)
        // let weatherId = (this.props.user.weather.id)
        // this.props.fetchWeather(userId, weatherId)
        this.props.fetchWeather(1, 1)

        // fetch(`http://localhost:3001/users/${userId}/weathers/${weatherId}`)
        // .then(resp => resp.json())
        // .then(data => console.log("Weather Container", data))
    }

    render() {
        return(
            <div className="weather-container">
                <Weather user={this.props.user} />
                <div>
                    <WeatherUpdate user={this.props.user} />
                </div>
            </div>
        )
    }
}

export default connect(null, { fetchWeather })(WeatherContainer);