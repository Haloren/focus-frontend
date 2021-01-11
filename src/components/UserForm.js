import React from 'react';
import { connect } from 'react-redux';
import { addUser } from '../redux/actionCreators'

class UserForm extends React.Component {

    state = { name: '', email: '', password: ''}

    handleOnChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleOnSubmit = (event) => {
        event.preventDefault()
        this.props.addUser(this.state)
        this.setState({name: '', email: '', password: ''});
    }

    render() {
        return (
        <>
            <form onSubmit={this.handleOnSubmit}>
                <input type="text" name="name" placeholder="Name" value={this.state.name} onChange={this.handleOnChange} required></input>
                <input type="email" name="email" placeholder="Email" value={this.state.email} onChange={this.handleOnChange} required></input>
                <input type="password" name="password" placeholder="password" value={this.state.password} onChange={this.handleOnChange} required></input>
                <input type="submit" value="Create Account"></input>
            </form>
        </>
        )
    }
}

export default connect(null, { addUser })(UserForm)