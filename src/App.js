import React, { Component } from 'react';
import './styles/App.css';
import { Header, Info, Skills,/* Experiences, Achievements */ } from './components';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
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
