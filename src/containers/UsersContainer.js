import React from 'react'
import {connect} from 'react-redux'

import {fetchUsers} from '../redux/actionCreators'

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.fetchUsers()
    }

    render() {
        return (
            <>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.users
    }
}

export default connect(mapStateToProps, {fetchUsers})(UsersContainer)