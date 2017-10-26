import React from 'react';
import { connect } from 'react-redux';
import GameNavbar from './GameNavbar';
import TweetNav from './TweetNav';
import PT from 'prop-types';
import fetchTweets from '../../actions/fetchTweets';
import { increaseScore, decreaseScore } from '../../actions/gameScore';

class GamePage extends React.Component {
  constructor(props) {
    super(props);
    this.handleScoreInc = this.handleScoreInc.bind(this);
    this.handleScoreDec = this.handleScoreDec.bind(this);
  }


  
  componentDidMount() {
    const username = this.props.match.params.username;
    this.props.fetchTweets(username);
  }

  render() {
    return (
      <div>
        <GameNavbar />
        <p>Player: {this.props.match.params.username}</p>
        <p>Players Profile Image here</p>
        {this.props.data.map((tweetData, i) => {
          return (<div key={i}>
            <h5>Tweets from: @{tweetData.user_screen_name}</h5>

            <p>{tweetData.tweet.text.split(' ').map((word) => {
              if (word === tweetData.answers.chosenWord) return word.toUpperCase();
              return word;
            }).join(' ')}</p>

            {tweetData.answers.choices.map((choice, i) => {
              return <button key={i} onClick={(choice.result) ? this.handleScoreInc : '' }>{choice.text}</button>;
            })}
            <TweetNav />
          </div>);
        })}
      </div>
    );
  }

  handleScoreInc(e) {
    this.props.increaseScore(10);
  }

  handleScoreDec(e) {
    this.props.decreaseScore(2);
  }

}

GamePage.propTypes = {
  match: PT.object,
  fetchTweets: PT.func,
  data: PT.array,
  increaseScore: PT.func,
  decreaseScore: PT.func
  
};

const mapStateToProps = (state) => {
  return {
    data: state.fetchTweetsReducer.data,
    loading: state.fetchTweetsReducer.loading,
    error: state.fetchTweetsReducer.error,
    gameScore: state.gameScoreReducer.gameScore,
    userScore: state.updateUserScoreReducer.userScore
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchTweets: (username) => {
      dispatch(fetchTweets(username));
    },
    increaseScore: (score) => {
      console.log('score has been dispatched', score);
      dispatch(increaseScore(score));
    },
    decreaseScore: (score) => {
      dispatch(decreaseScore(score));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GamePage);