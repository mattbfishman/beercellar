import React, { Component } from 'react';
import Button from '../Elements/Button';
import Form from './Form';
import './Layout.css';

class ColumnItem extends Component {

  render() {
    var props = this.props,
        type  = props && props.type,
        button;

        if(type === "a"){
            button = <Button type={"add"} label={"Add To Cellar"}/>;
        }
    return (
      <div className="column-item">
        <Form type="beerForm"/>
        {/* {button} */}
      </div>
    );
  }
}

export default ColumnItem;
