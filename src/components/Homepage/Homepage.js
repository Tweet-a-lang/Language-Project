import React from 'react';
import Start from '../../containers/Homepage/Start';
import Leaderboard from '../../containers/Homepage/Leaderboard';
import HowToPlay from './/HowToPlay';
import '../../css/app.css';
import '../../css/homepage.css';

class Homepage extends React.Component {
  render() {
    return (
      <div id='homepage' className='rows app-container'>
        <div className='row'>
          <div className='columns'>
            <div className='column is-two-thirds'>
              <div className='game-header'>
                <h1>TWEET-A-LANG</h1>
              </div>
            </div>
            <Start />
          </div>
        </div>
        <div className='row'>
          <div className='columns'>
            <div className='column is-two-thirds'>
              <h2>Welcome, come tweet-a-lang with us!</h2>
              <HowToPlay />
            </div>
            <div className='column'>
              <Leaderboard />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Homepage;