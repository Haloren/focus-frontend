import React from 'react';

const Events = (props) => {
    console.log("Events", props.events)

    return (
        <ul>
            {props.events && props.events.map(event =>
                <li key={event.id} className="list-container">
                    <h3 className="list-item">{event.title} - {event.date}</h3>
                    <button className="list-item">X</button>
                </li>
            )}
        </ul>
    )
}

export default (Events)