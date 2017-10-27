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
          <Link to={`/user/${this.props.userData.name}`} onClick={this.handleEndGame}>
            <button>End Game</button>
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
    this.props.patchUser(this.props.userData.name, this.props.score, [123,123,123]);
  }

  handleNextRound() {
    console.log('to the next round', this.props.score);
    this.props.patchUser(this.props.userData.name, this.props.score, this.props.completedTweets);
  }

}

GameNavbar.propTypes = {
  match: PT.object,
  score: PT.number,
  userData: PT.object,
  patchUser: PT.func,
  completedTweets: PT.array

};

const mapStateToProps = (state) => {
  return {
    score: state.userReducer.userData.score,
    userData: state.userReducer.userData,
    completedTweets: state.userReducer.userData.completedTweets
  };
};

const mapDispatchToProps = dispatch => {
  return {
    patchUser: (username, score, completedTweets) => {
      dispatch(patchUser(username, score, completedTweets));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GameNavbar);