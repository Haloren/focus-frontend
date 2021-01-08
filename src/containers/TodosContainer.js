import React from 'react';
import TodoForm from '../components/TodoForm';
import Todos from '../components/Todos';

class TodosContainer extends React.Component {

    render() {
        return(
            <div className="right">
                <h3 className="container-title">Todo List</h3>
                <div className="container">
                    <TodoForm />
                    <Todos />
                </div>
            </div>
        )
    }
}

export default TodosContainer