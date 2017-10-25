import React from 'react';
import { Link } from 'react-router-dom';
import ScoreTally from './ScoreTally';

class GameNavbar extends React.Component {
  render() {
    return (
      <div>
        <nav>
          <button><Link to='/'>Quit</Link></button>
          <button onClick={this.handleNextRoundClick}>Next Round</button>
          <ScoreTally />
        </nav>
      </div>
    );
  }
}


export default GameNavbar;