import { combineReducers } from "redux";

import todosReducer from './todosReducer'
// import eventsReducer from './eventsReducer'
// import usersReducer from './usersReducer'
// import weatherReducer from './weatherReducer'


export const reducer = combineReducers({
    todos: todosReducer,
    // events: eventsReducer,
    // users: usersReducer,
    // weather: weatherReducer
})