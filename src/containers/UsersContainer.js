import React from 'react';

import {connect} from 'react-redux';
import { fetchUsers } from '../redux/actionCreators';

import UserForm from '../components/UserForm';
import Users from '../components/Users';

class UsersContainer extends React.Component {

    componentDidMount() {
        // console.log(this.props.users)
        this.props.fetchUsers()
    }

    render() {
        return (
            <>
                <UserForm />
                <Users users={this.props.users.users}/>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.users
    }
}

export default connect(mapStateToProps, { fetchUsers })(UsersContainer);