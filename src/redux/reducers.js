const initialUserState = {
    users: []
}

const reducers = (state=initialUserState, action) => {
    // debugger;
    switch (action.type){
        case 'FETCH_USERS':
            return {users: action.payload}

        case 'ADD_USER':
            return {...state, users: [...state.users, action.payload]}

        case 'ADD_TODO':
            // debugger;
            let matchUserId = state.users.map(user => {
                if (user.id === action.payload.id) {
                    return action.payload
                } else {
                    return user
                }
            })
            return {...state, users: matchUserId}

        default:
            return {...state}
    }
}

export default reducers