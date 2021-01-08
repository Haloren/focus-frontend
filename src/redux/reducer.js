import { combineReducers } from "redux";

import usersReducer from './usersReducer'
// import todosReducer from './todosReducer'
// import eventsReducer from './eventsReducer'
// import weatherReducer from './weatherReducer'


export const reducer = combineReducers({
    users: usersReducer,
    // todos: todosReducer,
    // events: eventsReducer,
    // weather: weatherReducer
})