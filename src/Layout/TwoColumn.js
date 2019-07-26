import React, { Component } from 'react';
import ColumnItem from './ColumnItem';
import './Layout.css';

class TwoColumn extends Component {

  render() {
    return (
      <div className="two column">
        <ColumnItem type={"a"}/>
        <ColumnItem type={"b"}/>
      </div>
    );
  }
}

export default TwoColumn;
