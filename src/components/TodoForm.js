import React from 'react';

class TodoForm extends React.Component {

    state = { item: ''}

    handleOnChange = (event) => {
        // debugger;
        this.setState({
            item: event.target.value
        })
    }

    handleOnSubmit = (e) => {
        e.preventDefault()

    }

    render() {
        return (
            <>
                <form className="input-container" onSubmit={this.handleOnSubmit}>
                    <input type="text" name="item" value={this.state.item} onChange={this.handleOnChange} placeholder="Add a Todo" required ></input>
                    <input type="submit" value="Add Todo"></input>
                </form>
            </>
        )
    }
}

export default (TodoForm)