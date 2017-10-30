import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import GameScore from './GameScore';
import PT from 'prop-types';
import patchUser from '../../actions/patchUser';

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
          <Link onClick={this.handleEndGame} to={`/user/${this.props.username}`}>
            <button>End Game</button>
          </Link>
          <Link onClick={this.handleNextRound} to={`/tweets/${this.props.username}`}>
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
    this.props.patchUser(this.props.username, this.props.gameScore, this.props.gameCompletedTweets);
  }

  handleNextRound() {
    this.props.patchUser(this.props.username, this.props.gameScore, this.props.gameCompletedTweets);
  }

}

GameNavbar.propTypes = {
  username: PT.string,
  gameData: PT.object,
  gameScore: PT.number,
  gameCompletedTweets: PT.array,
  patchUser: PT.func
};

const mapStateToProps = (state) => {
  return {
    username: state.userReducer.userData.name,
    gameScore: state.userReducer.gameData.score,
    gameCompletedTweets: state.userReducer.gameData.completedTweets
  };
};

const mapDispatchToProps = dispatch => {
  return {
    patchUser: (username, gameScore, gameCompletedTweets) => {
      dispatch(patchUser(username, gameScore, gameCompletedTweets));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GameNavbar);