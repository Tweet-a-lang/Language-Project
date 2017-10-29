import React from 'react';
import { connect } from 'react-redux';
import GameNavbar from './GameNavbar';
import PT from 'prop-types';
import fetchTweets from '../../actions/fetchTweets';
import LetterHint from './LetterHint';
import { increaseScore } from '../../actions/updateScore';
import { updateCompletedTweets } from '../../actions/updateCompletedTweets';

class GamePage extends React.Component {
  constructor(props) {
    super(props);
    this.handleScoreInc = this.handleScoreInc.bind(this);
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
              return <button key={i} value={tweetData.tweet.id} onClick={(choice.result) ? this.handleScoreInc : '' }>{choice.text}</button>;
            })}
            <div><LetterHint
              word={tweetData.answers.choices[0]}/></div>
          </div>);
        })}
      </div>
    );
  }

  handleScoreInc(e) {
    this.props.increaseScore(10);
    this.props.updateCompletedTweets(e.target.value);
  }

}

GamePage.propTypes = {
  match: PT.object,
  fetchTweets: PT.func,
  data: PT.array,
  increaseScore: PT.func,
  updateCompletedTweets: PT.func,
  completedTweets: PT.array
};

const mapStateToProps = (state) => {
  return {
    data: state.fetchTweetsReducer.data,
    loading: state.fetchTweetsReducer.loading,
    error: state.fetchTweetsReducer.error,
    score: state.userReducer.userData.score,
    completedTweets: state.userReducer.completedTweets
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchTweets: (username) => {
      dispatch(fetchTweets(username));
    },
    increaseScore: (score) => {
      dispatch(increaseScore(score));
    },
    updateCompletedTweets: (id) => {
      dispatch(updateCompletedTweets(id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GamePage);