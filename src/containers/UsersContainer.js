import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { connect } from 'react-redux';
import { fetchUsers } from '../redux/actionCreators';

import Users from '../components/Users';
import UserForm from '../components/UserForm';
import DateTime from '../components/DateTime';
import Help from '../components/Help';

class UsersContainer extends React.Component {

    componentDidMount() {
        // console.log("Users Container", this.props) 
        this.props.fetchUsers()
    }

    render() {
        return (
            <>
            <Switch>
                <Route exact path='/new' component={ UserForm }></Route>
                <Route path='/users/:id' render={(routerProps) => <Users {...routerProps} users={this.props.users} />}></Route>
                {/* <Users users={this.props.users}/> */}

                <Route exact path='/help' component= { Help }></Route>
                <Route exact path='/' component={ DateTime }></Route>
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