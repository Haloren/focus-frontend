import React from 'react';

class TodoForm extends React.Component {

    state = { }

    render() {
        return (
            <>
                <h3>Todo List</h3>
                <form className="input-container" >
                    <input type="text" name="event" placeholder="Add a Todo" required ></input>
                    <input type="submit" value="Add"></input>
                </form>
            </>
        )
    }
}

export default (TodoForm)