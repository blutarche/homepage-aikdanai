import React, { Component } from 'react';
import './Header.css';
import { AppNavbar } from '../../components';

class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <div className="App-navbar" id="top">
          <AppNavbar />
        </div>
        <div className="App-title">
          A I K D A N A I
          <span className="hidden-xs">&nbsp;&nbsp;&nbsp;</span>
          <br className="visible-xs" />
          S I D H I K O S O L
      </div>
        <div className="App-job">DEVELOPER</div>
        <div className="App-job-subtitle">
          WEB <span className="App-job-subtitle-middot">&middot;</span> GAME
        </div>
      </header>
    );
  }
}

export default Header;
