import React from 'react';

class TodoForm extends React.Component {

    state = { item: ''}

    handleOnChange = (event) => {
        // debugger;
        this.setState({
            item: event.target.value
        })
    }

    render() {
        return (
            <>
                <form className="input-container" >
                    <input type="text" name="item" value={this.state.item} onChange={this.handleOnChange} placeholder="Add a Todo" required ></input>
                    <input type="submit" value="Add"></input>
                </form>
            </>
        )
    }
}

export default (TodoForm)