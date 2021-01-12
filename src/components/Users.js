import React from 'react';

import EventsContainer from '../containers/EventsContainer';
import TodosContainer from '../containers/TodosContainer';
import WeatherContainer from '../containers/WeatherContainer';


const Users = (props) => {

    // console.log(props.users.users)
    
    let user = props.users.users[props.match.params.id - 1]

    return (
        <>
            <h2> Hello {user ? user.name : null}</h2>
            <TodosContainer user={user} />
            <EventsContainer />
            <WeatherContainer />
        </>
    )
}

export default Users