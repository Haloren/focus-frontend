import React from 'react';

class UserForm extends React.Component {

    state = { name: '', email: ''}

    // handleOnChange
    // handleOnSubmit

    render() {
        return (
        <>
            <form>
                <input type="text" name="name" placeholder="Name" value={this.state.name} required></input>
                <input type="email" name="email" placeholder="Email" value={this.state.email} required></input>
                <input type="submit" value="Create Account"></input>
            </form>
        </>
        )
    }
}

export default (UserForm)