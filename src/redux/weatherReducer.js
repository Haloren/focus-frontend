const initialWeatherState = {
    weathers: []
}

const weathersReducer = (state = initialWeatherState, action) => {
    switch (action.type){
        case 'FETCH_WEATHERS':
            return {...state, weathers: action.payload}

        default: 
            return {...state}
    }
}

export default weathersReducer