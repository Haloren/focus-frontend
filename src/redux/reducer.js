import { combineReducers } from "redux";

import todosReducer from './todosReducer'
// import eventsReducer from './eventsReducer'
// import usersReducer from './usersReducer'


export const reducer = combineReducers({
    todos: todosReducer,
    // events: eventsReducer,
    // users: usersReducer
})