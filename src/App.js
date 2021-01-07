import React from 'react';
import './App.css';

let today = new Date();
let dateToday = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();


class App extends React.Component {
  
  
  
  render() {
    return (
      <>
        <h1>{dateToday}</h1>


        <footer><small> &copy;2021 Mostly Focused </small></footer>
      </>
    );
  }
}

export default App;