import React from 'react';
import { connect } from 'react-redux';
import GameNavbar from './GameNavbar';
import PT from 'prop-types';
import fetchTweets from '../../actions/fetchTweets';
import HintSelection from '../Hints/HintSelection';
import { increaseScore } from '../../actions/updateScore';
import { updateCompletedTweets } from '../../actions/updateCompletedTweets';
import _ from 'underscore';

class GamePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tweet0: false,
      tweet1: false,
      tweet2: false,
      tweet3: false,
      tweet4: false
    };
    this.handleCorrect = this.handleCorrect.bind(this);
    this.handleIncorrect = this.handleIncorrect.bind(this);
  }
  
  componentDidMount() {
    const username = this.props.match.params.username;
    this.props.fetchTweets(username);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.gameData !== newProps.gameData) {
      this.setState({
        tweet0: false,
        tweet1: false,
        tweet2: false,
        tweet3: false,
        tweet4: false
      });
      this.props.fetchTweets(this.props.username);
    }    
  }

  render() {
    
    return (
      <div>
        <GameNavbar 
          tweet0={this.state.tweet0} 
          tweet1={this.state.tweet1}
          tweet2={this.state.tweet2} 
          tweet3={this.state.tweet3}
          tweet4={this.state.tweet4}
        />
        <p>Player: {this.props.match.params.username}</p>
        <p>Players Profile Image here</p>
        {this.props.tweetArr.map((tweetData, tweetIndex) => {
          return (<div key={tweetIndex}>
            <h5>Tweets from: @{tweetData.tweet.user_screen_name}</h5>

            <p>{tweetData.tweet.text.split(' ').map((word) => {
              if (word === tweetData.answers.chosenWord) return word.toUpperCase();
              return word;
            }).join(' ')}</p>
            
            {_.shuffle(tweetData.answers.choices).map((choice, buttonIndex) => {
              return <button key={buttonIndex} type='submit' value={[tweetData.tweet.id, tweetIndex]} disabled={this.state['tweet' + tweetIndex]} onClick={(choice.result) ? this.handleCorrect : this.handleIncorrect }>{choice.text}</button>;
            })}
            <div><HintSelection
              word={tweetData.answers.choices[0]}/></div>
          </div>);
        })}
      </div>
    );
  }

  handleCorrect(e) {
    let tweetValue = e.target.value.split(',');
    let tweetStateKey = 'tweet' + tweetValue[1];
    let tweetStateObj = {};
    tweetStateObj[tweetStateKey] = true;
    this.props.increaseScore(10);
    this.props.updateCompletedTweets(tweetValue[0]);
    this.setState(tweetStateObj);
  }

  handleIncorrect(e) {
    let tweetValue = e.target.value.split(',');
    let tweetStateKey = 'tweet' + tweetValue[1];
    let tweetStateObj = {};
    tweetStateObj[tweetStateKey] = true;
    this.setState(tweetStateObj);
  }

}

GamePage.propTypes = {
  match: PT.object,
  fetchTweets: PT.func,
  tweetArr: PT.array,
  increaseScore: PT.func,
  updateCompletedTweets: PT.func,
  gameData: PT.object,
  username: PT.string
};

const mapStateToProps = (state) => {
  return {
    tweetArr: state.fetchTweetsReducer.data,
    loading: state.fetchTweetsReducer.loading,
    error: state.fetchTweetsReducer.error,
    gameData: state.userReducer.gameData,
    username: state.userReducer.userData.name
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