import React from 'react';
import '../../css/gameNav.css';
import { Link } from 'react-router-dom';
import PT from 'prop-types';

const GameNavbarUI = ({onEndGame, onNextGame, username, gameScore}) => (
  <div className="game-nav">
    <nav>
      <Link onClick={onEndGame} to={`/user/${username}`}>
        <button>End Game</button>
      </Link>
      <Link onClick={onNextGame} to={`/tweets/${username}`}>
        <button>Next Game</button>
      </Link>
      <p>PLAYER: {username}</p>
      <p>SCORE: {gameScore}</p>
    </nav>
  </div>
);

GameNavbarUI.propTypes = {
  username: PT.string,
  onEndGame: PT.func,
  onNextGame: PT.func,
  gameScore: PT.number
};

export default GameNavbarUI;