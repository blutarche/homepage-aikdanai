import React, { Component } from 'react';
import './Info.css';
import { Grid, Row, Col } from 'react-bootstrap';

class Info extends Component {
  render() {
    return (
      <div className="Info">
        <Grid>
          <Row>
            <Col sm={6}>
              <div className="Info-picture">
                [Dear future me, insert my picture here.]
              </div>
            </Col>
            <Col sm={6}>
              <div className="Info-content">
                <p>
                  <span className="Info-content-title">Hey there!</span>
                </p>
                <p>
                  I am <a href="https://facebook.com/aikdanai.s" rel="noopener noreferrer" target="_blank" className="color-primary">Aikdanai Sidhikosol</a>, a full-stack web developer and a game developer.
                </p>
                <p>
                  For website, I focused on front-end side of things and doing some back-end at times. Although I am interested in both. Web technologies was and still is changing fast so us developers have to adapt, but trying out new things is interesting so it's all good!
                </p>
                <p>
                  As for game development, even though I never have been in the game company or developed any large-scale games (or even any middle-scale one), I am still passionate about it. I have developed some small games as a hobby and it has been a lot of fun!
                </p>
              </div>
            </Col>
          </Row>
        </Grid>
    	</div>
    );
  }
}

export default Info;
