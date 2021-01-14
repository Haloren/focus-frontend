import React from 'react';
import { connect } from 'react-redux';
import { deleteEvent } from '../redux/actionCreators';

const Events = (props) => {
    // console.log("Events", props.events)
    const handleOnDelete = (event) => {
        props.deleteEvent(event.id, event.user_id)
    }

    return (
        <ul>
            {props.events && props.events.map(event =>
                <li key={event.id} className="list-container">
                    {event.title} - {event.date}
                    <button className="delete-btn" onClick={() => handleOnDelete(event)}>X</button>
                </li>
            )}
        </ul>
    )
}

export default connect(null, { deleteEvent })(Events)