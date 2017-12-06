import React from 'react';
import '../../css/gameNav.css';
import { Link } from 'react-router-dom';
import PT from 'prop-types';

const GameNavbarUI = ({onEndGame, onNextGame, username}) => (
  <div>
    <nav className="navbar">
      <div className="navbar-brand">
        <Link className="navbar-item" onClick={onEndGame} to={`/user/${username}`}>
          <button className='button is-info is-inverted'>End Game</button>
        </Link>
        <Link className="navbar-item" onClick={onNextGame} to={`/tweets/${username}`}>
          <button className='button is-info is-inverted'>Next Game</button>
        </Link>
      </div>
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