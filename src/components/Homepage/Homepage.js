import React from 'react';
import Start from '../../containers/Homepage/Start';
import Leaderboard from '../../containers/Homepage/Leaderboard';
import HowToPlay from './/HowToPlay';
import '../../css/app.css';

class Homepage extends React.Component {
  render() {
    return (
      <div className='rows'>
        <div className='columns'>
          <h1 className='gameHeader column is-four-fifths'>TWEET-A-LANG</h1>
          <Start/>
        </div>
        <div className='row'>
          <Leaderboard />
          <HowToPlay />
        </div>
      </div>
    );
  }
}

export default Homepage;