import React from 'react';

class EventForm extends React.Component {

    state = { }

    render() {
        return (
            <>
                <h3>Up Coming Events</h3>
                <form className="input-container" >
                    <input type="text" name="event" placeholder="Add an Event (ex: Birth Anniversary)" required ></input>
                    <input type="date" name="date" required ></input>
                    <input type="submit" value="Add Event"></input>
                </form>
            </>
        )
    }
}

export default (EventForm)