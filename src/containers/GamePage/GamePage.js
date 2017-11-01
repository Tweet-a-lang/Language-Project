import React from 'react';
import { connect } from 'react-redux';
import GameNavbar from './GameNavbar';
import LoadingPage from '../../components/Errors/LoadingPage';
import PT from 'prop-types';
import fetchTweets from '../../actions/fetchTweets';
import GamePageUI from '../../components/GamePage/GamePageUI';
import { increaseScore } from '../../actions/updateScore';
import { updateCompletedTweets } from '../../actions/updateCompletedTweets';

class GamePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tweet0: false,
      tweet1: false,
      tweet2: false,
      tweet3: false,
      tweet4: false,
      modalCorrectIsOpen: false,
      modalInCorrectIsOpen: false,
      correctTweetIndex: 0
    };
    this.handleCorrect = this.handleCorrect.bind(this);
    this.handleIncorrect = this.handleIncorrect.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  closeModal() {
    this.setState({modalCorrectIsOpen: false,  modalInCorrectIsOpen: false});
  }
  
  componentDidMount() {
    const username = this.props.match.params.username;
    const topic = this.props.location.search.split('=')[1];
    this.props.fetchTweets(username, topic);
  }

  componentWillReceiveProps(newProps) {
    console.log('cwrp', newProps);
    if (this.props.gameData !== newProps.gameData) {
      this.setState({
        tweet0: false,
        tweet1: false,
        tweet2: false,
        tweet3: false,
        tweet4: false
      });
      const topic = this.props.location.search.split('=')[1];
      this.props.fetchTweets(this.props.username, topic);
    }
    if (this.props.tweetArr !== newProps.tweetArr) {
      console.log('rerender');
    }
  }

  render() {
    
    return (
      <div>
        {(this.props.loading) ? <LoadingPage /> : ''}
        <GamePageUI 
          username={this.props.username}
          tweetArr={this.props.tweetArr}
          onCorrect={this.handleCorrect}
          onIncorrect={this.handleIncorrect}
          modalCorrectIsOpen={this.state.modalCorrectIsOpen}
          modalInCorrectIsOpen={this.state.modalInCorrectIsOpen}
          closeModal={this.closeModal}
          tweet0={this.state.tweet0}
          tweet1={this.state.tweet1}
          tweet2={this.state.tweet2}
          tweet3={this.state.tweet3}
          tweet4={this.state.tweet4}
          correctTweetIndex={this.state.correctTweetIndex}
        />
        <GameNavbar />
      </div>
    );
  }

  handleCorrect(e) {
    let tweetValue = e.target.value.split(',');
    let tweetStateKey = 'tweet' + tweetValue[1];
    let tweetStateObj = {
      modalCorrectIsOpen: true,
      correctTweetIndex: tweetValue[1]
    };
    tweetStateObj[tweetStateKey] = true;
    this.props.increaseScore(10);
    this.props.updateCompletedTweets(tweetValue[0]);
    this.setState(tweetStateObj);
  }

  handleIncorrect(e) {
    let tweetValue = e.target.value.split(',');
    let tweetStateKey = 'tweet' + tweetValue[1];
    let tweetStateObj = {
      modalInCorrectIsOpen: true
    };
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
  username: PT.string,
  loading: PT.bool,
  location: PT.object
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
    fetchTweets: (username, topic) => {
      dispatch(fetchTweets(username, topic));
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