import React, { Component } from 'react';
import Navbar from './Navbar/Navbar';
import { Route, Redirect } from "react-router-dom";
import OneColumn from './Layout/OneColumn';

import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
      <Navbar/>
      <Route path="/add" component={OneColumn} />
      </div>
    );
  }
}

export default App;
