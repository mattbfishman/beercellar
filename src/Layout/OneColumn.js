import React, { Component } from 'react';
import ColumnItem from './ColumnItem';
import './Layout.css';

class OneColumn extends Component {

  render() {
    var me        = this,
        props     = me && me.props,
        layout    = props && props.layout,
        type      = props && props.type,
        formType  = props && props.formType;

        // console.log(type);
    return (
      <div className="one column">
        <ColumnItem type={type} layout={layout} formType={formType}/>
      </div>
    );
  }
}

export default OneColumn;
