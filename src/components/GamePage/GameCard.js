import React from 'react';
import { connect } from 'react-redux';
import TweetNav from './TweetNav';
import PT from 'prop-types';
import fetchTweets from '../../actions/fetchTweets';
import { increaseScore } from '../../actions/updateScore';
// import saveUsername from '../../actions/saveUsername';

class GameCard extends React.Component {

  render() {
    console.log('*****', this.props);
    return (
      <div>
        {this.props.data.map((tweetData, i) => {
          return (<div key={i}>
            <h3>Tweets from: @{tweetData.originalTweetData.user.handle}</h3>

            <p>{tweetData.originalTweetData.text.split(' ').map((word) => {
              if (word === tweetData.wordSelection) return word.toUpperCase();
              return word;
            }).join(' ')}</p>

            {tweetData.multipleChoice.map((choice, i) => {
              return <button key={i} onClick={(choice.correct) ? this.props.increaseScore : this.props.onFalseClick}>{choice.choice}</button>;
            })}
            <TweetNav
              onShowHint={this.props.onShowHint}
              onSkipTweet={this.props.onSkipTweet} />
          </div>);
        })}

      </div>
    );
  }
}

GameCard.propTypes = {
  data: PT.array.isRequired,
  multipleChoice: PT.array,
  onTrueClick: PT.func,
  onFalseClick: PT.func,
  onShowHint: PT.func,
  onSkipTweet: PT.func,
  increaseScore: PT.func.isRequired
};

const mapStateToProps = (state, ownProps) => {
  console.log('state:', state, 'ownProps', ownProps);
  return {
    data: state.fetchTweetsReducer.data,
    loading: state.fetchTweetsReducer.loading,
    error: state.fetchTweetsReducer.error,
    score: state.score,
    username: state.username
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