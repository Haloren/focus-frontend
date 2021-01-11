import React from 'react';
import EventsContainer from '../containers/EventsContainer';
import TodosContainer from '../containers/TodosContainer';
import WeatherContainer from '../containers/WeatherContainer';


const Users = (props) => {
    console.log("Users", props.users)
    
    // let userName = props.users[props.match.params.id - 1].name

    return (
        <>
            {/* <h2> Hello {userName}</h2> */}
            <TodosContainer />
            <EventsContainer />
            <WeatherContainer />
        </>
    )
}

export default Users