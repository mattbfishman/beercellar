import React, { Component } from 'react';
import Navbar from './Navbar/Navbar';
import OneColumn from './Layout/OneColumn';

import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
      <Navbar/>
      <OneColumn/>
      </div>
    );
  }
}

export default App;
