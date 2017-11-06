import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Coursesales from './Coursesales';

class App extends Component {
  render() {

    let courses = [
      {name: 'Complete IOS', price: 199},
      {name: 'Complete Andriod', price: 10},
      {name: 'React', price: 20},
      {name: 'Angular', price: 199},
    ];
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

        </header>
    <Coursesales items={courses} />
      </div>
    );
  }
}

export default App;
