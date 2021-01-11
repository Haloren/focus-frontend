const initialUserState = {
    users: []
}

const usersReducer = (state=initialUserState, action) => {
    // debugger;
    switch (action.type){
        case 'FETCH_USERS':
            return {users: action.payload}

        case 'ADD_USER':
            return {...state, users: [...state.users, action.payload]}

        default:
            return {...state}
    }
}

export default usersReducer