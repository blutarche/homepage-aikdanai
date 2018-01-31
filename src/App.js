import React, { Component } from 'react';
import './styles/App.css';
import { AppNavbar, Info, Skills,/* Experiences, Achievements */ } from './components';

class App extends Component {
  render() {
    return (
      <div className="App">
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
        <div id="info">
          <Info />
        </div>
        <div id="skills">
          <Skills />
        </div>
        <div id="achievements">
          {/* <Achievements /> */}
        </div>
        <div id="experiences">
          {/* <Experiences /> */}
        </div>
      </div>
    );
  }
}

export default App;
