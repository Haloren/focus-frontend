import React from 'react';
import { connect } from 'react-redux';
import { updateZip } from '../redux/actionCreators';

class WeatherForm extends React.Component {

    state = { zip: '' }

    handleOnChange = (event) => {
        this.setState({
            zip: event.target.value
        })
    }

    handleOnSubmit = (event) => {
        event.preventDefault()
        // this.props.updateZip(this.state, this.props.user.id, this.props.weather.id)
        this.setState({ zip: '' });
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

export default connect(null, { updateZip })(WeatherForm)