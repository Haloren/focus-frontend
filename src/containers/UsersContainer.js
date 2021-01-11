import React from 'react';
import {Route, Switch} from 'react-router-dom';

import {connect} from 'react-redux';
import { fetchUsers } from '../redux/actionCreators';

import Users from '../components/Users';
import UserForm from '../components/UserForm';

class UsersContainer extends React.Component {

    componentDidMount() {
        // console.log(this.props) 
        this.props.fetchUsers()
    }

    render() {
        return (
            <>
            <Switch>
                <Route exact path='/new' component={ UserForm }></Route>
                <Route path='/' render={(routerProps) => <Users {...routerProps} users={this.props.users} />}></Route>
                {/* <Users users={this.props.users}/> */}
            </Switch>
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