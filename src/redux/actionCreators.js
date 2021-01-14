const API = "http://localhost:3001"

// FETCH DATA FROM DATABASE
export function fetchUsers() {

    return (dispatch) => {
        fetch(API + '/users')
        .then(resp => resp.json())
        // .then(data => console.log(data))
        .then(users => dispatch({
            type: 'FETCH_USERS',
            payload: users
        }))
    }
}

//ADD DATA TO DATABASE
export const addUser = (user) => {
    // debugger;
    return (dispatch) => {
        fetch(API + '/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(user),
        })
        .then(resp => resp.json())
        .then(user => {
            // debugger;
            if (user.message) {
                alert(user.message)
            } else {
                dispatch({type: 'ADD_USER', payload: user})
            }   
        })

    }
}
export const addTodo = (todo, userId) => {
    return (dispatch) => {
        fetch(API + `/users/${userId}/todos`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(todo),
        })
        .then(resp => resp.json())
        .then(user => {
            if (user.message) {
                alert(user.message)
            } else {
                dispatch({type: 'ADD_TODO', payload: user})
            }
        })
    }
}
export const addEvent = (event, userId) => {
    return (dispatch) => {
        fetch(API + `/users/${userId}/events`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(event),
        })
        .then(resp => resp.json())
        .then(user => {
            if (user.message) {
                alert(user.message)
            } else {
                dispatch({type: 'ADD_EVENT', payload: user})
            }
        })
    }
}

// UPDATE DATA IN DATABASE
export const updateZip = (zip, userId, weatherId) => {
    return (dispatch) => {
        fetch(API + `/users/${userId}/weathers/${weatherId}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(zip),
        })
        .then(resp => resp.json())
        .then(user => {
            if (user.message) {
                alert(zip.message)
            } else {
                dispatch({type: 'UPDATE_ZIP', payload: user})
            }
        })
    }
}

// DELETE DATA FROM DATABASE
export const deleteTodo = (todoId, userId) => {
    return (dispatch) => {
        fetch(API + `/users/${userId}/todos/${todoId}`, {
            method: 'DELETE',
            },
        )
        .then(resp => resp.json())
        .then(user => {
            if (user.message) {
                alert(user.message)
            } else {
                dispatch({type: 'DELETE_TODO', payload: user})
            }
        })
    }
}
export const deleteEvent = (eventId, userId) => {
    return (dispatch) => {
        fetch(API + `/users/${userId}/events/${eventId}`, {
            method: 'DELETE',
            },
        )
        .then(resp => resp.json())
        .then(user => {
            if (user.message) {
                alert(user.message)
            } else {
                dispatch({type: 'DELETE_EVENT', payload: user})
            }
        })
    }
}