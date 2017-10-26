import React from 'react';
import { connect } from 'react-redux';
import PT from 'prop-types';

class GameScore extends React.Component {
  constructor(props) { 
    super(props);
  }
  render() {
    return (
      <div>
        <span>Score: {this.props.gameScore}</span>
      </div>
    );
  }
}

GameScore.propTypes = {
  gameScore: PT.number
};

const mapStateToProps = state => {
  return {
    gameScore: state.gameScoreReducer.gameScore
  };
};


export default connect(mapStateToProps)(GameScore);