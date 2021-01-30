const initialUserState = {
    weather: []
}

const weatherReducer = (state=initialUserState, action) => {
    // debugger;
    switch (action.type){
        case 'FETCH_WEATHER':
            return {users: action.payload}

    default:
        return {...state}
    }
}
    
export default weatherReducer