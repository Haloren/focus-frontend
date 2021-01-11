import React from 'react';

import EventsContainer from '../containers/EventsContainer';
import TodosContainer from '../containers/TodosContainer';
import WeatherContainer from '../containers/WeatherContainer';


const Users = (props) => {

    console.log(props.users.users)
    
    // let userName = props.users.users[props.match.params.id - 1].name

    return (
        <>
            {/* <h2> Hello {props.users[0].name}</h2> */}
            <TodosContainer />
            <EventsContainer />
            <WeatherContainer />
        </>
    )
}

export default Users