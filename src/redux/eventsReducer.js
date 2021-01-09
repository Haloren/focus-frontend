const initialEventState = {
    events: []
}

const eventsReducer = (state=initialEventState, action) => {
    switch (action.type){
        case 'FETCH_EVENTS':
            return {...state, events: action.payload}

        default:
            return {...state}
    }
}

export default eventsReducer