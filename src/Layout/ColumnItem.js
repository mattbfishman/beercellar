import React, { Component } from 'react';
import Form from './Form';
import Table from '../Elements/TableElement';
import './Layout.css';

class ColumnItem extends Component {

  render() {
    var props = this.props,
        type = props && props.type,
        ret;

    if(type === "form"){
      var formType  = props && props.formType;
        ret = <Form type={formType}/>;
    }
    else if(type == "table"){
        ret = <Table/>;
    }

    return (
      <div className="column-item">
        {ret}
      </div>
    );
  }
}

export default ColumnItem;
