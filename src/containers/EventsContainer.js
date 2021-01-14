import React from 'react';
import EventForm from '../components/EventForm';
import Events from '../components/Events';

class EventsContainer extends React.Component {
    render() {
        return(
            <div className="left">
                <div className="container">
                    <div>
                        <EventForm />
                    </div>
                    <Events events={this.props.user && this.props.user.events} />
                </div>
            </div>
        )
    }
}

export default EventsContainer