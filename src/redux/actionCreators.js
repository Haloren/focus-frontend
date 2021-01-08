const API = "http://localhost:3001/"

//FETCH DATA FROM DATABASE
export function fetchUsers() {
    return (dispatch) => {
        fetch(API + '/users')
        .then(resp => resp.json())
        .then(data => console.log(data))
    }
}

//ADD DATA TO DATABASE
export const addEvent = (event, userId) => {
    return (dispatch) => {
        fetch(API + `users/${userId}/events`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(event),
        })
        .then(resp => resp.json())
        .then(event => {
            if (event.message) {
                alert(event.message)
            } else {
                dispatch({type: 'ADD_EVENT', payload: event})
            }
        })
    }
}

export const addTodo = (todo, userId) => {
    return (dispatch) => {
        fetch(API + `users/${userId}todos`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(todo),
        })
        .then(resp => resp.json())
        .then(todo => {
            if (todo.message) {
                alert(todo.message)
            } else {
                dispatch({type: 'ADD_TODO', payload: todo})
            }
        })
    }
}

// DELETE DATA FROM DATABASE