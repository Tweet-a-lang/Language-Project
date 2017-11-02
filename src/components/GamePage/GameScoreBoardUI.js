import React from 'react';
import PT from 'prop-types';
import '../../css/gamepage.css';
import '../../css/gamepage.css';

const GameScoreBoardUI = ({username, usernameParams, gameScore}) => (
  <div className="game-scoreboard">
    <p>PLAYER: {(username) ? username : usernameParams }</p>
    <p>SCORE: {gameScore}</p>
  </div>

);

GameScoreBoardUI.propTypes = {
  gameScore: PT.number.isRequired,
  username: PT.string.isRequired,
  usernameParams: PT.string.isRequired
};

export default GameScoreBoardUI;
