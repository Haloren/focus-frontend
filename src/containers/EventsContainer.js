import React from 'react';
import EventForm from '../components/EventForm';
import Events from '../components/Events';

class EventsContainer extends React.Component {

    render() {
        return(
            <>
                <EventForm />
                <Events />
            </>
        )
    }
}

export default EventsContainer