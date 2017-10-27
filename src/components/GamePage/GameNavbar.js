import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import GameScore from './GameScore';
import PT from 'prop-types';
import {updateUserScore} from '../../actions/updateScore';

class GameNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.handleEndGame = this.handleEndGame.bind(this);
    this.handleNextRound = this.handleNextRound.bind(this);
  }
  render() {
    return (
      <div>
        <nav>
          <Link to={`/user/${this.props.userData.name}`} onClick={this.handleEndGame}>
            <button>
              End Game
            </button>
          </Link>
          <Link to={`/tweets/${this.props.userData.name}`} onClick={this.handleNextRound}>
            <button>
              Next Game
            </button>
          </Link>

          <GameScore />
        </nav>
      </div>
    );
  }
  handleEndGame() {
    console.log('I am ending the game', this.props.score);
    this.props.updateUserScore(this.props.score);
  }

  handleNextRound() {
    console.log('to the next round', this.props.score);
    this.props.updateUserScore(this.props.score);
  }

}

GameNavbar.propTypes = {
  match: PT.object,
  score: PT.number,
  userData: PT.object,
  updateUserScore: PT.func,
  gameScoreReducer: PT.func

};

const mapStateToProps = (state) => {
  return {
    score: state.userReducer.userData.score,
    userData: state.userReducer.userData
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateUserScore: (gameScore) => {
      dispatch(updateUserScore(gameScore));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GameNavbar);