import React from 'react';
import Start from '../../containers/Homepage/Start';
import Leaderboard from '../../containers/Homepage/Leaderboard';
import HowToPlay from './/HowToPlay';
import '../../css/app.css';

class Homepage extends React.Component {
  render() {
    return (
      <div className='rows'>
        <div className='row'>
          <div className='columns'>
            <h1 className='gameHeader column is-two-thirds'>TWEET-A-LANG</h1>
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