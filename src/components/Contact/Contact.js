import React, { Component } from 'react';
import './Contact.css';
import { Grid } from 'react-bootstrap';
import _ from 'lodash';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.contacts = [
      {
        icon: 'fab fa-github',
        link: 'https://github.com/blutarche',
      },
      {
        icon: 'fab fa-facebook-square',
        link: 'https://www.facebook.com/aikdanai.s',
      },
      {
        icon: 'fab fa-twitter',
        link: 'https://twitter.com/blutarche',
      },
      {
        icon: 'fas fa-envelope',
        link: 'mailto:aikdanai.s@gmail.com',
      },
    ];
  }

  renderContacts() {
    return _.map(this.contacts, (value, key) => {
      return (
        <div className="Contact-set" key={key}>
          <a href={value.link} target="_blank">
            <i className={value.icon}></i>
          </a>
        </div>
      )
    });
  }

  render() {
    return (
      <div className="Contact">
        <Grid>
          <div className="Contact-title">
            Contact
          </div>
          <div className="Contact-wrap">
            {this.renderContacts()}
          </div>
        </Grid>
    	</div>
    );
  }
}

export default Contact;
