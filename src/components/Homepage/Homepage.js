import React from 'react';
import Start from '../../containers/Homepage/Start';
import Leaderboard from '../../containers/Homepage/Leaderboard';
import HowToPlay from './/HowToPlay';

class Homepage extends React.Component {
  render() {
    return (
      <div>
        <Start />
        <Leaderboard />
        <HowToPlay />
      </div>
    );
  }
}

export default Homepage;