import React, { Component } from 'react';
import './styles/App.css';
import { AppNavbar, Skills,/* Experiences, Achievements */ } from './components';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-navbar">
          <AppNavbar />
        </div>
        <header className="App-header">
          <div className="App-title">Aikdanai Sidhikosol</div>
          <div className="App-job">Developer</div>
          <div className="App-job-subtitle">
            website &middot; game
          </div>
        </header>
        <div id="skills">
          <Skills />
        </div>
        <div id="achievements">
          {/* <Skills /> */}
        </div>
        <div id="experiences">
          {/* <Skills /> */}
        </div>
      </div>
    );
  }
}

export default App;
