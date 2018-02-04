import React, { Component } from 'react';
import './Experiences.css';
import { Grid } from 'react-bootstrap';
import _ from 'lodash';

class Experiences extends Component {

  constructor(props) {
    super(props);
    this.experiences = [
      {
        name: 'Full-stack web developer',
        company: 'Freelance',
        time: '2015 - Present'
      },
      {
        name: 'Full-stack web developer intern',
        company: 'Runnables Co., Ltd.',
        companyLink: 'https://runnables.co.th/',
        time: 'June 2016 - December 2016'
      }
    ];
  }

  renderExperiences() {
    return _.map(this.experiences, (value, key) => {
      return (
        <div className="Experiences-set" key={key}>
          <div className="Experiences-set-name">
            {value.name}
          </div>
          <div className="Experiences-set-company">
            {value.companyLink ?
              <a href={value.companyLink} target="_blank">{value.company}</a> :
              value.company
            }
          </div>
          <div className="Experiences-set-time">
            {value.time}
          </div>
        </div>
      )
    });
  }
  render() {
    return (
      <div className="Experiences">
        <Grid>
          <div className="Experiences-title">
            Experiences
          </div>
          <div className="Experiences-wrap">
            {this.renderExperiences()}
          </div>
        </Grid>
    	</div>
    );
  }
}

export default Experiences;
