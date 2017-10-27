import React from 'react';
import { connect } from 'react-redux';
import GameNavbar from './GameNavbar';
import PT from 'prop-types';
import fetchTweets from '../../actions/fetchTweets';
import LetterHint from './LetterHint';
import { increaseScore } from '../../actions/updateScore';

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
              return <button key={i} onClick={(choice.result) ? this.handleScoreInc : '' }>{choice.text}</button>;
            })}
            <div><LetterHint
              word={tweetData.answers.choices[0]}/></div>
          </div>);
        })}
      </div>
    );
  }

  handleScoreInc() {
    this.props.increaseScore(10);
  }

}

GamePage.propTypes = {
  match: PT.object,
  fetchTweets: PT.func,
  data: PT.array,
  increaseScore: PT.func
  
};

const mapStateToProps = (state) => {
  return {
    data: state.fetchTweetsReducer.data,
    loading: state.fetchTweetsReducer.loading,
    error: state.fetchTweetsReducer.error,
    score: state.userReducer.userData.score
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
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GamePage);