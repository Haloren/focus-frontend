import React from 'react';
import EventsContainer from '../containers/EventsContainer';
import TodosContainer from '../containers/TodosContainer';
import WeatherContainer from '../containers/WeatherContainer';


const User = (props) => {
    console.log(props.users.users)
    // console.log(props.users.users[props.match.params.id - 1])

    return (
        <>
            <h2> Hello User Name</h2>
            <TodosContainer />
            <EventsContainer />
            <WeatherContainer />
        </>
    )
}

export default User