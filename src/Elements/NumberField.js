import React, { Component } from 'react';
import Field from '@material-ui/core/TextField';
import './Elements.css';

class TextField extends Component {
  constructor(props){
    super(props);
    this.state = {
      amount: props.defaultVal
    };
  }

  handleChange = event => {
    this.setState({ amount: event.target.value });
  };
    
  render() {
    var props  = this.props,
        label  = props && props.label,
        min    = props && props.min,
        max    = props && props.max;

    var inputProps = {
      inputProps: {
        min: min,
        max: max
      }
    };

    return (
        <Field
          label={label}
          margin="normal"
          variant="outlined"
          className="element-field number-field"
          value={this.state.amount}
          InputProps={inputProps}
          onChange={this.handleChange}
          type="number"
        />
    );
  }
}

export default TextField;
