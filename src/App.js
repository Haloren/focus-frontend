import React from 'react';
import './App.css';
// import { connect } from 'react-redux';

import UsersContainer from './containers/UsersContainer';
import WeatherContainer from './containers/WeatherContainer';
import DateTimeContainer from './containers/DateTimeContainer';
import EventsContainer from './containers/EventsContainer';
import TodosContainer from './containers/TodosContainer';

class App extends React.Component {
  
  componentDidMount() {
    console.log(this)
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

export default (App);