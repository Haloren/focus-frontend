import React from 'react';
import WeatherForm from '../components/WeatherForm'
import Weather from '../components/Weather'

class WeatherContainer extends React.Component {

    render() {
        return(
            <>
                <WeatherForm />
                <Weather />
            </>
        )
    }
}

export default WeatherContainer