import React from 'react';

const Events = (props) => {
    // console.log("Events", props.events)

    return (
        <ul>
            {props.events && props.events.map(event =>
                <li key={event.id} className="list-container">
                    {event.title} - {event.date}
                    <button className="delete-btn">X</button>
                </li>
            )}
        </ul>
    )
}

export default (Events)