import React from 'react';

class WeatherForm extends React.Component {

    state = { }

    render() {
        return (
            <>
                <form className="input-container">
                    <input type="text" name="zip" placeholder="Zip Code" className="zip-input" required ></input>
                    <input type="submit" value="Enter"></input>
                </form>
            </>
        )
    }
}

export default (WeatherForm)