import React, { Component } from 'react';
import TextField from '../Elements/TextField';
import NumberField from '../Elements/NumberField';
import SelectField from '../Elements/SelectField';
import Button from '@material-ui/core/Button';
import FormConfig from '../Configs/Form.js';
import './Layout.css';

var titles = [
  {label: 'Treehouse Brewing Company', value:0},
  {label: 'Founders Brewing Company', value:1},
  {label: 'Kane Brewing', value:2},
]

class Form extends Component {
  render(props) {
    var me = this,
        props = me && me.props,
        type  = props && props.type,
        formType = type && FormConfig && FormConfig[type] || {};

    return (
      <div className="form-container">
        <form className="form">
              {Object.keys(formType).map(function(key) {
                  var item = formType && formType[key],
                      type = item && item["type"],
                      label = item && item["label"];
                  if(type === "select"){
                    var titles = item && item["titles"] || [],
                        helpText = item && item["helpText"] || '';
                    return <SelectField key={key} titles={titles} helpText={helpText} label={label}/>;
                  }
                  else if(type === "number"){
                    var max = item && item["max"] || 0,
                        min = item && item["min"] || 0;
                    return <NumberField key={key} label={label} min={min} max={max}/>;
                  }
                  else if(type === "text"){
                    return <TextField key={key}  label={label}/>
                  }
                  else if(type === "button"){
                    var color = item && item["color"] || false;
                    return (
                      <Button variant="contained" color={color}>
                        {label}
                      </Button>
                    );
                  }
                
              })}
        </form>
      </div>
    );
  }
}

export default Form;
