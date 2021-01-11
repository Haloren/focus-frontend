import { combineReducers } from "redux";

import usersReducer from './usersReducer'
// import todosReducer from './todosReducer'
// import eventsReducer from './eventsReducer'
// import weatherReducer from './weatherReducer'


export const allReducers = combineReducers({
    users: usersReducer,
    // todos: todosReducer,
    // events: eventsReducer,
    // weather: weatherReducer
})