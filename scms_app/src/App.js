import React, { Component } from 'react';
import Sidemenu from './components/sidemenu/Sidemenu';

import './asset/customStyle/style.css';
import './asset/customStyle/fontz.css';
import './asset/customStyle/bootstrapmanual.css';


class App extends Component {

  componentWillMount() {
    document.title = 'School College Management System - Dashboard'
  }

  render() {
    return (
      <div className="wrapper">
        <Sidemenu/> 
     </div>
    );
  }
}

export default App;
