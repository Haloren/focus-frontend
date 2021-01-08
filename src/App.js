import React from 'react';
import './App.css';

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
        
        <DateTimeContainer />
        <div className="eventsContainer">
          <EventsContainer />
        </div>
        <div className="todosContainer">
          <TodosContainer />
        </div>

        <footer><small> &copy;2021 Mostly Focused </small></footer>
      </>
    );
  }
}

export default App;