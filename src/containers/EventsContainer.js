import React from 'react';
import EventForm from '../components/EventForm';
import Events from '../components/Events';

class EventsContainer extends React.Component {
    render() {
        return(
            <div className="events">
                <div className="container-title">
                    Up Coming Events <button className="expand-btn">+</button>
                </div>
                <hr></hr>
                <div>
                    <Events events={this.props.user && this.props.user.events} />
                </div>
                <div className="event-form">
                    <EventForm user={this.props.user}/>
                </div>
            </div>
        )
    }
}

export default EventsContainer