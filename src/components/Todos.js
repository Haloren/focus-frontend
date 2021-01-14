import React from 'react';

const Todos = (props) => {
    // console.log("Todos", props.todos)

    return (
        <ul>
            {props.todos && props.todos.map(todo =>
                <li key={todo.id} className="list-container">
                    <input type="checkbox"></input>
                    <h3>{todo.item}</h3>
                    <button>X</button>
                </li>
            )}
        </ul>
    )
}

export default (Todos)