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
            let userTodoAdd = state.users.map(user => {
                if (user.id === action.payload.id) {
                    return action.payload
                } else {
                    return user
                }
            })
            return {...state, users: userTodoAdd}

        case 'ADD_EVENT':
            let userEventAdd = state.users.map(user => {
                if (user.id === action.payload.id) {
                    return action.payload
                } else {
                    return user
                }
            })
            return {...state, users: userEventAdd}

        case 'UPDATE_ZIP':
            debugger;
            return {}

        default:
            return {...state}
    }
}

export default reducers