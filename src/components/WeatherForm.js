import React from 'react';

class WeatherForm extends React.Component {

    state = { zip: '' }

    handleOnChange = (event) => {
        this.setState({
            zip: event.target.value
        })
    }

    handleOnSubmit = (event) => {
        event.preventDefault()
        
        // this.setState({ zip: '' });
    } 

    render() {
        return (
            <>
                <form className="input-container" onSubmit={this.handleOnSubmit}>
                    <input type="text" name="zip" value={this.state.zip} onChange={this.handleOnChange} placeholder="Zip Code" className="zip-input" required ></input>
                    <input type="submit" value="Enter"></input>
                </form>
            </>
        )
    }
}

export default (WeatherForm)