import React from 'react';

import {connect} from 'react-redux';
import { fetchUsers } from '../redux/actionCreators';

import User from '../components/User';

class UsersContainer extends React.Component {

    componentDidMount() {
        // console.log(this.props.users)
        this.props.fetchUsers()
    }

    render() {
        return (
            <>
                <User users={this.props.users}/>
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