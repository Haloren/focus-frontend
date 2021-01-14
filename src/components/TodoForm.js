import React from 'react';
import { connect } from 'react-redux';

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

    }

    render() {
        return (
            <>
                <form className="input-container" onSubmit={this.handleOnSubmit}>
                    <input type="text" name="item" value={this.state.item} onChange={this.handleOnChange} placeholder="Add a Todo" required ></input>
                    <input type="submit" value="Add Todo"></input>
                </form>
                <br></br>
            </>
        )
    }
}

export default connect(null)(TodoForm)