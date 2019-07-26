import React, { Component } from 'react';
import './Elements.css';

class Button extends Component {

  render() {
    var props       = this.props,
        buttonType  = props && props.type,
        label       = props && props.label;

    return (
      <button className={buttonType + ' btn'}>{label}</button>
    );
  }
}

export default Button;
