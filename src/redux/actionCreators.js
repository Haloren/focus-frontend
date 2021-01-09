const API = "http://localhost:3001/"

// FETCH DATA FROM DATABASE
export function fetchUsers() {
    return (dispatch) => {
        fetch(API + '/users')
        .then(resp => resp.json())
        .then(users => dispatch({
            type: 'FETCH_USERS',
            payload: users
        }))
    }
}
export function fetchTodos() {
    return (dispatch) => {
        fetch(API + '/users/1/todos')
        .then(resp => resp.json())
        .then(todos => dispatch({
            type: 'FETCH_TODOS',
            payload: todos
        }))
    }
}
export function fetchEvents() {
    return(dispatch) => {
        fetch(API + '/users/1/events')
        .then(resp => resp.json())
        .then(events => dispatch({
            type: 'FETCH_EVENTS',
            payload: events
        }))
    }
}
export function fetchWeathers() {
    return(dispatch) => {
        fetch(API + '/users/1/weathers/1')
        .then(resp => resp.json())
        .then(weathers => dispatch({
            type: 'FETCH_WEATHERS',
            payload: weathers
        }))
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
export const addZip = (zip, userId, weatherId) => {
    return (dispatch) => {
        fetch(API + `users/${userId}/weathers/${weatherId}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(zip),
        })
        .then(resp => resp.json())
        .then(zip => {
            if (zip.message) {
                alert(zip.message)
            } else {
                dispatch({type: 'ADD_ZIP', payload: zip})
            }
        })
    }
}

// DELETE DATA FROM DATABASE
