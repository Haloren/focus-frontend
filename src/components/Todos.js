import React from 'react';

const Todos = (props) => {
    

    return (
        <>
            <ul>
                <li className="list-container">
                    <input className="list-item" type="checkbox"></input>
                    <h3 className="list-item">Todo will be listed here</h3>
                    <button className="list-item">X</button>
                </li>
            </ul>
        </>
    )
}

export default (Todos)