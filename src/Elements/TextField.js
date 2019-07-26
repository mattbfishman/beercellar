import React, { Component } from 'react';
import Field from '@material-ui/core/TextField';
import './Elements.css';

class TextField extends Component {

  render() {
    var props = this.props,
        label  = props && props.label;
    return (
        <Field
          label={label}
          margin="normal"
          variant="outlined"
          className="element-field text-field"
        />
    );
  }
}

export default TextField;
