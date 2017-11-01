import React from 'react';
import { connect } from 'react-redux';
import GameNavbarUI from '../../components/GamePage/GameNavbarUI';
import PT from 'prop-types';
import patchUser from '../../actions/patchUser';

class GameNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.handleEndGame = this.handleEndGame.bind(this);
    this.handleNextGame = this.handleNextGame.bind(this);
  }
  
  render() {
    return (
      <div>
        <GameNavbarUI 
          onEndGame={this.handleEndGame}
          onNextGame={this.handleNextGame}
          username={this.props.username}
          gameScore={this.props.gameScore}
        />
      </div>
    );
  }
  handleEndGame() {
    this.props.patchUser(this.props.username, this.props.gameScore, this.props.gameCompletedTweets, this.props.vocab);
  }

  handleNextGame() {
    this.props.patchUser(this.props.username, this.props.gameScore, this.props.gameCompletedTweets, this.props.vocab);
  }

}

GameNavbar.propTypes = {
  username: PT.string,
  gameData: PT.object,
  gameScore: PT.number,
  gameCompletedTweets: PT.array,
  patchUser: PT.func,
  vocab: PT.array
};

const mapStateToProps = (state) => {
  return {
    username: state.userReducer.userData.name,
    gameScore: state.userReducer.gameData.score,
    gameCompletedTweets: state.userReducer.gameData.completedTweets,
    vocab: state.userReducer.gameData.vocab
  };
};

const mapDispatchToProps = dispatch => {
  return {
    patchUser: (username, gameScore, gameCompletedTweets, gameVocab) => {
      dispatch(patchUser(username, gameScore, gameCompletedTweets, gameVocab));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GameNavbar);