import React, { Component } from 'react';
import './Info.css';
import { Grid } from 'react-bootstrap';

class Info extends Component {
  render() {
    return (
      <div className="Info">
        <Grid>
          <div className="Info-container">
            <div className="Info-picture">
              <div className="Info-picture-actual" />
            </div>
            <div className="Info-content">
              <p>
                <span className="Info-content-title">Hey there!</span>
              </p>
              <p>
                I am <a href="https://facebook.com/aikdanai.s" rel="noopener noreferrer" target="_blank" className="color-primary">Aikdanai Sidhikosol</a>, a full-stack web developer and a game developer based in Bangkok, Thailand.
              </p>
              <p>
                For website, I focused on front-end side of things and did some back-end at times. Although I am interested in both. Web technologies was and still is changing fast so us developers have to adapt, but trying out new things is interesting so it's all good!
              </p>
              <p>
                As for game development, even though I never have been in the game company or developed any large-scale games (or even any middle-scale one), I am still passionate about it. I have developed some small games as a hobby and it has been a lot of fun!
              </p>
            </div>
          </div>
        </Grid>
    	</div>
    );
  }
}

export default Info;
