import React, { Component } from 'react';
import { Clear, Dashboard } from '@material-ui/icons';
import NavbarConfig from '../Configs/Navbar.js';

import './Navbar.css';

class Navbar extends Component {
  constructor(props){
    super(props);
    this.state = {
      show: true
    };
  }

  toggleShow = event => {
    this.setState({ show: this.state.show ? false : true });
  };

  render() {
    var me    = this,
        state = me && me.state,
        show  = state && state.show,
        navType =  NavbarConfig && NavbarConfig["navItems"] || {};

        console.log(navType);
    return (
      <div>
        {show ? (
          <div className="navbar">
            <div className="navbar-header">
            {/* <h2>Beer Cellar</h2> */}
            <Clear className="navbar-close" onClick={this.toggleShow}>close</Clear>
            </div>
            <div className="navbar-body">
              {Object.keys(navType).map(function(key) {
                var item = navType && navType[key],
                    label = item && item["label"];
                
                return <div key={key} className="navbar-item">{label}</div>
              })}
            </div>
          </div>
        ):(
          <Dashboard className="navbar-open" onClick={this.toggleShow}>open</Dashboard>
        )}
      </div>
    );
  }
}

export default Navbar;
