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

  render() {
    
    return (
      <div>
        <GameNavbar />
        <p>Player: {this.props.match.params.username}</p>
        <p>Players Profile Image here</p>
<<<<<<< HEAD
        {this.props.data.map((tweetData, tweetIndex) => {
          
          return (<div key={tweetIndex}>
            <h5>Tweets from: @{tweetData.user_screen_name}</h5>
=======
        {this.props.data.map((tweetData, i) => {
          return (<div key={i}>
            <h5>Tweets from: @{tweetData.tweet.user_screen_name}</h5>
>>>>>>> feat-newUser

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

    //disable the buttons once clicked
    let tweetValue = e.target.value.split(',');
    let tweetStateKey = 'tweet' + tweetValue[1];
    let tweetStateObj = {};
    tweetStateObj[tweetStateKey] = true;

    this.props.increaseScore(10);
    this.props.updateCompletedTweets(tweetValue[0]);
    this.setState(tweetStateObj);
  }

  handleIncorrect(e) {
    
    //disable the buttons once clicked
    let tweetValue = e.target.value.split(',');
    let tweetStateKey = 'tweet' + tweetValue[1];
    let tweetStateObj = {};
    tweetStateObj[tweetStateKey] = true;
   
    // this.props.updateCompletedTweets(tweetValue[0]); // use if wish to only allow one attempt at tweets, even if incorrect answer chosen.
    this.setState(tweetStateObj);
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