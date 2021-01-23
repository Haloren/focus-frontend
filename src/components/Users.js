import React from 'react';
import { Link } from 'react-router-dom';

import EventsContainer from '../containers/EventsContainer';
import TodosContainer from '../containers/TodosContainer';
import WeatherContainer from '../containers/WeatherContainer';


const Users = (props) => {

    // console.log(props.users)
    
    let user = props.users.filter(user => user.id == props.match.params.id)[0]

    return (
        <>
            <h2 className="hello-user">{user ? ("Hello " + user.name) : <Link to={'/new'} className="login-btn">Please Login</Link>}</h2>
            <TodosContainer user={user} />
            <EventsContainer user={user}/>
            {/* <WeatherContainer user={user}/> */}
        </>
    )
}

export default Users