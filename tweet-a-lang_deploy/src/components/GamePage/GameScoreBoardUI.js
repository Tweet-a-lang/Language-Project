import React from 'react';
import PT from 'prop-types';
import '../../css/gamepage.css';
import '../../css/gamepage.css';

const GameScoreBoardUI = ({username, usernameParams, gameScore}) => (
  <div className="game-scoreboard">
    <div className="user-info">
      <p className="head">PLAYER:</p><p className="info">{(username) ? username : usernameParams }</p>
      <p className="head">SCORE:</p><p className="info">{gameScore}</p>
    </div>
  </div>

);

GameScoreBoardUI.propTypes = {
  gameScore: PT.number.isRequired,
  username: PT.string.isRequired,
  usernameParams: PT.string.isRequired
};

export default GameScoreBoardUI;
