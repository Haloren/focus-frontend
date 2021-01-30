import { combineReducers } from 'redux';

import weatherReducer from './weatherReducer';
import reducers from './reducers';

export const reducer = combineReducers({
    users: reducers,
    weather: weatherReducer
}) 