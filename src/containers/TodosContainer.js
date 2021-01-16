import React from 'react';

import TodoForm from '../components/TodoForm';
import Todos from '../components/Todos';

class TodosContainer extends React.Component {
    render() {
        return(
            <div className="todos">
                <div className="container-title">
                    Todo List <button>+</button>
                </div>
                <div className="container">
                    <Todos todos={this.props.user && this.props.user.todos} />
                </div>
                <div className="todos-form">
                    <TodoForm user={this.props.user} />
                </div>
            </div>
        )
    }
}

export default (TodosContainer);