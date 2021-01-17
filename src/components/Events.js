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
                <li key={event.id} className="list-items">
                    <h3> {event.date} </h3>
                    <h3> {event.title} </h3>
                    <button className="delete-btn" onClick={() => handleOnDelete(event)}>X</button>
                </li>
            )}
        </ul>
    )
}

export default connect(null, { deleteEvent })(Events)