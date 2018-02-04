import React, { Component } from 'react';
import './Projects.css';
import { Grid } from 'react-bootstrap';
import _ from 'lodash';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.webProjects = [
      {
        type: 'slide',
        name: 'Remeind',
        link: 'https://drive.google.com/open?id=1CDNjc0ZeuBvFRzx6hguwNfBA1zaYEIkIdze_yxB39cg',
      },
      {
        type: 'slide',
        name: 'Summary @Runnables',
        link: 'https://speakerdeck.com/blutarche/co-operative-education-at-runnables',
      },
      {
        type: 'github',
        name: 'Intensifier',
        link: 'https://github.com/blutarche/intensifier',
      },
    ];
    this.gameProjects = [
      {
        name: 'Svyfe',
        link: 'https://globalgamejam.org/2018/games/svyfe-0',
      },
      {
        name: 'Did I threaten you enough?',
        link: 'https://globalgamejam.org/2017/games/did-i-threaten-you-enough',
      },
      {
        name: 'I am Four',
        link: 'https://globalgamejam.org/2015/games/i-am-four',
      },
      {
        name: 'Someone in the Maze',
        link: 'https://github.com/blutarche/someone-in-the-maze',
      },
      {
        name: 'Blink',
        link: 'https://github.com/blutarche/blink-the-game',
      },
    ];
  }

  renderWebProjects() {
    return _.map(this.webProjects, (value, key) => {
      return (
        <div className="Projects-set" key={key}>
          <a href={value.link} target="_blank">
            {value.name}
          </a>
        </div>
      )
    });
  }

  renderGameProjects() {
    return _.map(this.gameProjects, (value, key) => {
      return (
        <div className="Projects-set" key={key}>
          <a href={value.link} target="_blank">
            {value.name}
          </a>
        </div>
      )
    });
  }

  render() {
    return (
      <div className="Projects">
        <Grid>
          <div className="Projects-title">
            Projects
          </div>
          <div className="Skills-subtitle">
            Other than real works that I most likely can't be sharing.
          </div>
          <div className="Projects-title2">
            Websites
          </div>
          <div className="Projects-wrap">
            {this.renderWebProjects()}
          </div>
          <div className="Projects-title2">
            Games
          </div>
          <div className="Projects-wrap">
            {this.renderGameProjects()}
          </div>
        </Grid>
    	</div>
    );
  }
}

export default Projects;
