import React from 'react';
import EventForm from '../components/EventForm';
import Events from '../components/Events';

class EventsContainer extends React.Component {

    render() {
        return(
            <div className="left">
                <h3 className="container-title">Up Coming Events</h3>
                <div className="container">
                    <EventForm />
                    <Events />
                </div>
            </div>
        )
    }
}

export default EventsContainer