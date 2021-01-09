import React from 'react'
import {connect} from 'react-redux'

class UsersContainer extends React.Component {

    componentDidMount() {

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

export default connect(mapStateToProps)(UsersContainer)