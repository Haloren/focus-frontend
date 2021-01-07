import React from 'react';
import './App.css';

import DateTimeContainer from './containers/DateTimeContainer'
import EventsContainer from './containers/EventsContainer'
import TodosContainer from './containers/TodosContainer'

class App extends React.Component {
  
  componentDidMount() {

  }
  
  render() {
    return (
      <>
        
        <DateTimeContainer />
        <EventsContainer />
        <TodosContainer />

        <footer><small> &copy;2021 Mostly Focused </small></footer>
      </>
    );
  }
}

export default App;