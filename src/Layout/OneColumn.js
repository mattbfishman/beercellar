import React, { Component } from 'react';
import ColumnItem from './ColumnItem';
import './Layout.css';

class OneColumn extends Component {

  render() {
    return (
      <div className="one column">
        <ColumnItem type={"a"}/>
      </div>
    );
  }
}

export default OneColumn;
