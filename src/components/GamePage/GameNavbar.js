import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import GameScore from './GameScore';
import PT from 'prop-types';
import updateUserScore from '../../actions/updateUserScore';

class GameNavbar extends React.Component {
  render() {
    return (
      <div>
        <nav>
          <button onClick={this.handleClick}><Link to={`/user/${this.props.userData.name}`}>End Game</Link></button>
          {/* <button onClick={this.handleNextRoundClick}>Next Round</button> */}
          <GameScore />
        </nav>
      </div>
    );
  }
  handleClick(e) {
    e.preventDefault();
    updateUserScore(this.props.gameScore, this.props.userScore);
  }

}

GameNavbar.propTypes = {
  match: PT.object,
  gameScore: PT.number,
  userScore: PT.number,
  userData: PT.object
};

const mapStateToProps = (state) => {
  return {
    userScore: state.updateUserScoreReducer.userScore,
    gameScore: state.gameScoreReducer.gameScore,
    userData: state.fetchUserReducer.userData
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateUserScore: (gameScore, userScore) => {
      dispatch(updateUserScore(gameScore, userScore));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GameNavbar);