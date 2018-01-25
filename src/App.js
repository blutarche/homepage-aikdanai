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
          <div className="App-title">Aikdanai Sidhikosol</div>
          <div className="App-job">Developer</div>
          <div className="App-job-subtitle">
            website &middot; game
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
