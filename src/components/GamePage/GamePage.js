import React from 'react';
import { connect } from 'react-redux';
import GameNavbar from './GameNavbar';
import TweetNav from './TweetNav';
import PT from 'prop-types';
import fetchTweets from '../../actions/fetchTweets';

class GamePage extends React.Component {
  constructor(props) {
    super(props);
  }
  
  componentDidMount() {
    const username = this.props.match.params.username;
    console.log('CDM username:', username);
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

            <p>{tweetData.text.split(' ').map((word) => {
              if (word === tweetData.answers.chosenWord) return word.toUpperCase();
              return word;
            }).join(' ')}</p>

            {tweetData.answers.choices.map((choice, i) => {
              return <button key={i} onClick={(choice.result) ? 'true' : 'false' }>{choice.text} {choice.result} </button>;
            })}
            <TweetNav />
          </div>);
        })}
      </div>
    );
  }
}

GamePage.propTypes = {
  match: PT.object,
  fetchTweets: PT.func,
  data: PT.array
};

const mapStateToProps = (state, ownProps) => {
  console.log('state:', state, 'ownProps', ownProps);
  return {
    data: state.fetchTweetsReducer.data,
    loading: state.fetchTweetsReducer.loading,
    error: state.fetchTweetsReducer.error
  };
};

const mapDispatchToProps = dispatch => ({
  fetchTweets: (username) => {
    dispatch(fetchTweets(username));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(GamePage);