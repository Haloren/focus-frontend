import React from 'react';

class EventForm extends React.Component {

    state = { title: '', date: ''}

    render() {
        return (
            <>
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