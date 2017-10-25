import React from 'react';
import { connect } from 'react-redux';
import TweetNav from './TweetNav';
import PT from 'prop-types';
import fetchTweets from '../../actions/fetchTweets';
import increaseScore from '../../actions/increaseScore';

class GameCard extends React.Component {
  render() {
    console.log('*****',this.props);
    return (
      <div>
        <p>Player: Olie</p>
        <p>Players Profile Image here</p>
        {this.props.data.map((tweetData, i) => {
          return (<div key={i}>
            <h3>Tweets from: @{tweetData.originalTweetData.user.handle}</h3>

            <p>{tweetData.originalTweetData.text.split(' ').map((word) => {
              if (word === tweetData.wordSelection) return word.toUpperCase();
              return word;
            }).join(' ')}</p>

            {tweetData.multipleChoice.map((choice, i) => {
              return <button key={i} onClick={(choice.correct)?this.props.increaseScore : this.props.onFalseClick}>{choice.choice}</button>;
            })}
            <TweetNav 
              onShowHint={this.props.onShowHint}
              onSkipTweet={this.props.onSkipTweet}/>
          </div> );
        })}
            
      </div>
    );
  }
}

GameCard.propTypes = {
  data: PT.array.isRequired,
  multipleChoice: PT.array,
  onTrueClick: PT.func.isRequired,
  onFalseClick: PT.func.isRequired,
  onShowHint: PT.func.isRequired,
  onSkipTweet: PT.func.isRequired,
  increaseScore: PT.func.isRequired
};

const mapStateToProps = state => {
  return {
    data: state.fetchTweetsReducer.data,
    loading: state.fetchTweetsReducer.loading,
    error: state.fetchTweetsReducer.error,
    score: state.increaseScoreReducer.score,
    username: state.Handle.username
  };
};
  
const mapDispatchToProps = dispatch => ({
  fetchTweets: () => {
    dispatch(fetchTweets());
  },
  increaseScore: () => {
    dispatch(increaseScore(10));
  }
});
  
export default connect(mapStateToProps, mapDispatchToProps)(GameCard);