import React from 'react';
import { connect } from 'react-redux';
import PT from 'prop-types';

class GameScore extends React.Component {
  render() {
    return (
      <div>
        <span>Game score: {this.props.gameScore}</span>
      </div>
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