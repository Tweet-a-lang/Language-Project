import React from 'react';
import { connect } from 'react-redux';
import PT from 'prop-types';
import GameScoreUI from '../../components/GamePage/GameScoreUI';

class GameScore extends React.Component {
  render() {
    return (
      <GameScoreUI 
        gameScore={this.props.gameScore}
      />
    );
  }
}

GameScore.propTypes = {
  gameScore: PT.number
};

const mapStateToProps = state => {
  return {
    gameScore: state.userReducer.gameData.score
  };
};


export default connect(mapStateToProps)(GameScore);