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
          <button onClick={this.handleClick}><Link to={`/user/${this.props.match.params.username}`}>End Game</Link></button>
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
  userScore: PT.number
};

const mapStateToProps = (state) => {
  return {
    userScore: state.fetchUserReducer.userData.score,
    gameScore: state.gameScoreReducer.gameScore
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