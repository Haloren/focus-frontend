import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../redux/actionCreators';

class TodoForm extends React.Component {

    state = { item: ''}

    handleOnChange = (event) => {
        // debugger;
        this.setState({
            item: event.target.value
        })
    }

    handleOnSubmit = (event) => {
        event.preventDefault()
        // debugger;
        this.props.addTodo(this.state, this.props.user.id)
        this.setState({ item: ''});
    }

    render() {
        return (
            <div className="add-input">
                <form className="input-container" onSubmit={this.handleOnSubmit}>
                    <input type="text" name="item" value={this.state.item} onChange={this.handleOnChange} placeholder="Add a Todo" required ></input>
                    <input type="submit" value="+"></input>
                </form>
                <br></br>
            </div>
        )
    }
}

export default connect(null, { addTodo })(TodoForm)