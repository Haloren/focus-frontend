const initialTodoState = {
    todos: []
}

const todosReducer = (state = initialTodoState, action) => {
    switch (action.type){
        case 'FETCH_TODOS':
            return {...state, todos: action.payload}

        default: 
            return {...state}
    }
}

export default todosReducer