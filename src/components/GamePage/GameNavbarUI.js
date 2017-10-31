import React from 'react';
import { Link } from 'react-router-dom';
import GameScore from './GameScore';
import PT from 'prop-types';

const GameNavbarUI = ({onEndGame, onNextGame, username}) => (
  <div>
    <nav>
      <Link onClick={onEndGame} to={`/user/${username}`}>
        <button>End Game</button>
      </Link>
      <Link onClick={onNextGame} to={`/tweets/${username}`}>
        <button>
              Next Game
        </button>
      </Link>
      <GameScore />
    </nav>
  </div>
);

GameNavbarUI.propTypes = {
  username: PT.string,
  onEndGame: PT.func,
  onNextGame: PT.func
};

export default GameNavbarUI;