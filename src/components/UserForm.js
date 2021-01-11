import React from 'react';

class UserForm extends React.Component {

    state = { name: '', email: ''}

    render() {
        <>
            <form>
                <input type="text" name="name" placeholder="Name" required></input>
                <input type="email" name="email" placeholder="Email" required></input>
                <input type="submit" value="Create Account"></input>
            </form>
        </>
    }
}

export default (UserForm)