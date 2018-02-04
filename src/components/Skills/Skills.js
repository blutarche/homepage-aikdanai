import React, { Component } from 'react';
import './Skills.css';
import { Grid } from 'react-bootstrap';
import _ from 'lodash';

class Skills extends Component {

  constructor(props) {
    super(props);
    this.skills = [
      { name: 'Algorithm', level: 95 },
      { name: 'HTML/CSS', level: 90 },
      { name: 'Javascript', level: 85 },
      { name: 'C/C++', level: 85 },
      { name: 'ReactJS', level: 80 },
      { name: 'Node.js', level: 75 },
      { name: 'PHP', level: 75 },
      { name: 'Unity', level: 70 },
      { name: 'AngularJS', level: 70 },
      { name: 'Python', level: 65 },
      { name: 'C#', level: 65 },
      { name: 'UI/UX', level: 50 },
    ];
  }

  renderSkills() {
    return _.map(this.skills, (value, key) => {
      return (
        <div className="Skills-set" key={key}>
          <div className="Skills-set-name">
            {value.name}
          </div>
          <div className="Skills-set-level">
            <div
              className="Skills-set-level-bar"
              style={{width:`${value.level}%`}}
            />
          </div>
        </div>
      )
    });
  }

  render() {
    return (
      <div className="Skills">
        <Grid>
          <div className="Skills-title">
            Skills
          </div>
          <div className="Skills-subtitle">
            Determined by my confidence in each one.
          </div>
          <div className="Skills-wrap">
            { this.renderSkills() }
          </div>
        </Grid>
    	</div>
    );
  }
}

export default Skills;
