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
        <Route path="/add" render={()=>
          <OneColumn layout="a" type="form" formType="beerForm"/>} 
        />
        <Route path="/mycellar" render={()=>
          <OneColumn layout="a" type="table" formType="cellarTable"/>} 
        />
      </div>
    );
  }
}

export default App;
