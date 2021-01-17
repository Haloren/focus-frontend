import React from 'react';
import { connect } from 'react-redux';
import { deleteTodo } from '../redux/actionCreators';

const Todos = (props) => {
    // console.log("Todos", props.todos)
    const handleOnDelete = (todo) => {
        // debugger;
        props.deleteTodo(todo.id, todo.user_id)
    }

    return (
        <ul>
            {props.todos && props.todos.map(todo =>
                <li key={todo.id} className="list-items">
                    <input type="checkbox" className="checkbox"></input>
                    {todo.item}
                    <button className="delete-btn" onClick={() => handleOnDelete(todo)}>X</button>
                </li>
            )}
        </ul>
    )
}

export default connect(null, { deleteTodo })(Todos)