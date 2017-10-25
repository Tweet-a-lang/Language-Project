import React from 'react';
import { Link } from 'react-router-dom';
import ScoreTally from './ScoreTally';
import PT from 'prop-types';

class GameNavbar extends React.Component {
  render() {
    return (
      <div>
        <nav>
          <button><Link to='/'>Quit</Link></button>
          <ScoreTally
            score={this.props.score} />
        </nav>
      </div>
    );
  }
}

GameNavbar.propTypes = {
  score: PT.number.isRequired
};

export default GameNavbar;