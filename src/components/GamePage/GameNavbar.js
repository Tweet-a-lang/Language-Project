import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import GameScore from './GameScore';
import PT from 'prop-types';
import {updateUserScore} from '../../actions/updateUserScore';

class GameNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  render() {
    return (
      <div>
        <nav>
          <Link to={`/user/${this.props.userData.name}`}>End Game</Link>
          <button onClick={this.handleClick}>End Game</button>
          {/* <button onClick={this.handleNextRoundClick}>Next Round</button> */}
          <GameScore />
        </nav>
      </div>
    );
  }
  handleClick() {
    console.log('I am ending the game', this.props.gameScore);
    this.props.updateUserScore(this.props.gameScore, this.props.userScore);
  }

}

GameNavbar.propTypes = {
  match: PT.object,
  gameScore: PT.number,
  userScore: PT.number,
  userData: PT.object,
  updateUserScore: PT.func,
  gameScoreReducer: PT.func

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