import React from 'react';
import Start from '../../containers/Homepage/Start';
import Leaderboard from '../../containers/Homepage/Leaderboard';
import HowToPlay from './/HowToPlay';
import '../../css/app.css';

class Homepage extends React.Component {
  render() {
    return (
      <div className='rows app-container'>
        <div className='row'>
          <div className='columns'>
            <div className='column is-two-thirds'>
              <h1 className='gameHeader'>TWEET-A-LANG</h1>
            </div>
            <Start />
          </div>
        </div>
        <div className='row'>
          <div className='columns'>
            <div className='column is-two-thirds'>
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