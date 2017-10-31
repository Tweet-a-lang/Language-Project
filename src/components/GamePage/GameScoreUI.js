import React from 'react';
import PT from 'prop-types';

const GameScoreUI = ({gameScore}) => (
  <div>
    <span>Game score: {gameScore}</span>
  </div>
);

GameScoreUI.propTypes = {
  gameScore: PT.number
};

export default GameScoreUI;