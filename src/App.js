import React from 'react';
import './App.css';
import { connect } from 'react-redux';

import WeatherContainer from './containers/WeatherContainer';
import DateTimeContainer from './containers/DateTimeContainer';
import EventsContainer from './containers/EventsContainer';
import TodosContainer from './containers/TodosContainer';

import UsersContainer from './containers/UsersContainer';

class App extends React.Component {
  
  componentDidMount() {
    console.log(this.props)
  }
  
  render() {
    return (
      <>
        <div className="background"></div>

        <UsersContainer />
        <WeatherContainer />
        <DateTimeContainer />
        <EventsContainer />
        <TodosContainer />

        <footer><small> &copy;2021 Mostly Focused </small></footer>
      </>
    );
  }
}

// const mapDispatchToProps = (dispatch) => ({
//     users: () => dispatch({type: "FETCH_USER"})
// })

export default (App);
// export default connect(null)(App);
// export default connect(null, mapDispatchToProps)(App);