import React, { Component } from 'react';
import './Info.css';

class Info extends Component {
  render() {
    return (
      <div className="Info">
        <div className="Info-picture">
          [Dear future me, insert my picture here.]
        </div>
        <div className="Info-content">
          <p>
            <span className="Info-content-title">Hey there!</span>
          </p>
          <p>
            Nice to meet you. I am <a href="https://facebook.com/aikdanai.s" rel="noopener noreferrer" target="_blank" className="color-primary">Aikdanai Sidhikosol</a>, a full-stack web developer and a game developer.
          </p>
          <p>
            For website, I mostly developed on front-end side of things with a little bit of back-end here and there. But I am interested in both. I love to try new technologies or libraries to complete different requirements each project has, in which case web development satisfied that needs quite well.
          </p>
          <p>
            As for game development, even though I never have been in the game company or developed any large-scale games (or even any middle-scale one), I am still passionate about it. I have developed some small games as a hobby and it has been a lot of fun!
          </p>
        </div>
    	</div>
    );
  }
}

export default Info;
