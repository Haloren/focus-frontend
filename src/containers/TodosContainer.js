import React from 'react';
import TodoForm from '../components/TodoForm';
import Todos from '../components/Todos';

class TodosContainer extends React.Component {

    render() {
        return(
            <>
                <TodoForm />
                <Todos />
            </>
        )
    }
}

export default TodosContainer