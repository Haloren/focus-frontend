import React from 'react';
import TodosForm from '../components/TodoForm'
import Todos from '../components/Todos'

class TodosContainer extends React.Component {

    render() {
        return(
            <>
                <TodosForm />
                <Todos />
            </>
        )
    }
}

export default TodosContainer