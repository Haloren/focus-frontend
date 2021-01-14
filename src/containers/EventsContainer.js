import React from 'react';
import EventForm from '../components/EventForm';
import Events from '../components/Events';

class EventsContainer extends React.Component {
    render() {
        return(
            <div className="events">
                <h3 className="container-title">Up Coming Events</h3>
                <div className="container">
                    <div>
                        <EventForm user={this.props.user}/>
                    </div>
                    <Events events={this.props.user && this.props.user.events} />
                </div>
            </div>
        )
    }
}

export default EventsContainer