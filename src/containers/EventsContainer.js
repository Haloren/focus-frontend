import React from 'react';
import EventForm from '../components/EventForm';
import Events from '../components/Events';

class EventsContainer extends React.Component {

    render() {
        return(
            <div className="eventsContainer">
                <EventForm />
                <Events />
            </div>
        )
    }
}

export default EventsContainer