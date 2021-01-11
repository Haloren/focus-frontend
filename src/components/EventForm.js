import React from 'react';

class EventForm extends React.Component {

    state = { title: '', date: ''}

    handleOnChange = (event) => {
        // debugger;
        this.setState({
            // title: event.target.value
            // date: event.target.date
            [event.target.name]: event.target.value
        })
    }

    handleOnSubmit = (event) => {
        event.preventDefault()
        
    }

    render() {
        return (
            <>
                <form className="input-container" onSubmit={this.handleOnSubmit}>
                    <input type="text" name="title" value={this.state.title} onChange={this.handleOnChange} placeholder="Add an Event (ex: Birth Anniversary)" required ></input>
                    <input type="date" name="date" value={this.state.date} onChange={this.handleOnChange} required ></input>
                    <input type="submit" value="Add Event"></input>
                </form>
            </>
        )
    }
}

export default (EventForm)