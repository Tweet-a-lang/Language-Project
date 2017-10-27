import React from 'react';
import { connect } from 'react-redux';
import PT from 'prop-types';

class GameScore extends React.Component {
  constructor(props) { 
    super(props);
  }

  // componentWillReceiveProps(nextProps) {
  //   let newScore = nextProps.updatedGameScore;
  //   let oldScore = this.props.gameScore;
  //   if(newScore > oldScore) {
  //     this.props.gameScore
  //   }
  // }
  render() {
    return (
      <div>
        <span>Score: {this.props.score}</span>
      </div>
    );
  }
}

GameScore.propTypes = {
  score: PT.number
};

const mapStateToProps = state => {
  return {
    score: state.userReducer.userData.score
  };
};


export default connect(mapStateToProps)(GameScore);