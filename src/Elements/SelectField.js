import React, { Component } from 'react';
import Field from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import orderBy from 'lodash/orderBy';

import './Elements.css';

class SelectField extends Component {
  constructor(props){
    super(props);
    this.state = {
      selected: ''
    };
  }

  handleChange = event => {
    this.setState({ selected: event.target.value });
  };


  render() {
    var props = this.props,
        helperText  = props && props.helpText,
        label       = props && props.label,
        titles      = props && props.titles,
        sort        = props && props.sort;

    if(sort){
      if(sort === "alpha"){
        titles = orderBy(titles, ['label'],['asc']); // Use Lodash to sort array by 'name'
      }
    }
        
    return (
        <Field
          id="outlined-select-currency"
          select
          label={label}
          helperText={helperText}
          margin="normal"
          variant="outlined"
          className="element-field select-field"
          value={this.state.selected}
          onChange={this.handleChange}
        >
        {titles.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Field>
    );
  }
}

export default SelectField;
