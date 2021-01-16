import React from 'react';
import './App.css';

// import { connect } from 'react-redux';
// import { fetchUsers } from './redux/actionCreators'

import DateTime from './components/DateTime';
import UsersContainer from './containers/UsersContainer';
// import WeatherContainer from './containers/WeatherContainer';
// import EventsContainer from './containers/EventsContainer';
// import TodosContainer from './containers/TodosContainer';

class App extends React.Component {
  
  // componentDidMount() {
    // fetch('http://localhost:3001/users')
    // .then(resp => resp.json())
    // .then(data => console.log(data))
  // }
  
  render() {
    return (
      <>
        <div className="background"></div>
        
        <DateTime />
        <UsersContainer />
        {/* <WeatherContainer />
        <EventsContainer />
        <TodosContainer /> */}
          
        <footer><small> &copy;2021 Mostly Focused </small></footer>
      </>
    );
  }
}


export default (App);
// export default connect(null, { fetchUsers })(App);