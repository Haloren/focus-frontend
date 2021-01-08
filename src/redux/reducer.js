import { combineReducers } from "redux";

import todosReducer from './todosReducer'


export const reducer = combineReducers({
    todos: todosReducer,
    // events: eventsReducer,
    // user: userReducer
})