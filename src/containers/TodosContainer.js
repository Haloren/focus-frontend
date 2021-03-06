import React from 'react';
import TodoForm from '../components/TodoForm';
import Todos from '../components/Todos';

class TodosContainer extends React.Component {
    render() {
        return(
            <>
                <div className="todos-title">
                    Todo List 
                    {/* <button className="expand-btn">+</button> */}
                </div>
                <div className="todos-form">
                        <TodoForm user={this.props.user} />
                </div>
                <div className="todos">
                    <Todos todos={this.props.user && this.props.user.todos} />
                </div>
            </>
        )
    }
}

export default (TodosContainer);