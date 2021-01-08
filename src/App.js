import React from 'react';
import './App.css';
import { connect } from 'react-redux'

import WeatherContainer from './containers/WeatherContainer'
import DateTimeContainer from './containers/DateTimeContainer'
import EventsContainer from './containers/EventsContainer'
import TodosContainer from './containers/TodosContainer'

class App extends React.Component {
  
  componentDidMount() {
    fetch('http://localhost:3001/users')
    .then(resp => resp.json())
    .then(data => console.log(data))
  }
  
  render() {
    return (
      <>
        <div className="background"></div>

        <WeatherContainer />
        <DateTimeContainer />
        <EventsContainer />
        <TodosContainer />

        <footer><small> &copy;2021 Mostly Focused </small></footer>
      </>
    );
  }
}

// const mapStateToProps = (state) => {
//   return {
//     users: state.users
//   }
// }

// export default (App);
export default connect(null)(App);
// export default connect(null, {mapDispatchToProps})(App);