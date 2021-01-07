import React from 'react';

class EventForm extends React.Component {

    state = { }

    render() {
        return (
            <>
                <h3>Add an Event</h3>
                <form className="input-container" >
                    <input type="text" name="event" placeholder="Enter Event Name (ex: Birth Anniversary)" required ></input>
                    <input type="date" name="date" required ></input>
                    <input type="submit" value="Add Event"></input>
                </form>
            </>
        )
    }
}

export default (EventForm)