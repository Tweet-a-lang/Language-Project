import React from 'react';
import { connect } from 'react-redux';
import GameNavbar from './GameNavbar';
import LoadingPage from '../../components/Errors/LoadingPage';
import PT from 'prop-types';
import fetchTweets from '../../actions/fetchTweets';
import GamePageUI from '../../components/GamePage/GamePageUI';
import { increaseScore } from '../../actions/updateScore';
import { updateCompletedTweets } from '../../actions/updateCompletedTweets';
import { updateVocab } from '../../actions/updateVocab';
import { saveTopic } from '../../actions/saveTopic';

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
    this.setState({ modalCorrectIsOpen: false, modalInCorrectIsOpen: false });
  }

  componentDidMount() {
    const username = this.props.match.params.username;
    const topic = this.props.location.search.split('=')[1];
    this.props.fetchTweets(username, topic);
    this.props.saveTopic(topic);
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
      // const topic = this.props.location.search.split('=')[1];
      this.props.fetchTweets(this.props.username, this.props.topic);
    }
    if (this.props.tweetArr !== newProps.tweetArr) {
      console.log('rerender');
    }
  }

  render() {

    return (
      <div>
        {(this.props.loading) ? <LoadingPage /> :
          <div>
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
          </div>}
      </div>
    );
  }

  handleCorrect(e) {
    setTimeout(() => {
      this.setState({ modalCorrectIsOpen: false });
    }, 2000);

    let tweetValue = e.target.value.split(',');
    let tweetStateKey = 'tweet' + tweetValue[1];
    let tweetStateObj = {
      modalCorrectIsOpen: true,
      correctTweetIndex: tweetValue[1]
    };
    tweetStateObj[tweetStateKey] = true;
    this.props.increaseScore(10);
    this.props.updateCompletedTweets(tweetValue[0]);
    this.props.updateVocab({ Spanish: this.props.tweetArr[tweetValue[1]].answers.chosenWord, English: this.props.tweetArr[tweetValue[1]].answers.translatedWord });
    this.setState(tweetStateObj);
  }

  handleIncorrect(e) {
    setTimeout(() => {
      this.setState({ modalInCorrectIsOpen: false });
    }, 1000);
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
  match: PT.object.isRequired,
  fetchTweets: PT.func.isRequired,
  tweetArr: PT.array.isRequired,
  increaseScore: PT.func.isRequired,
  updateCompletedTweets: PT.func.isRequired,
  updateVocab: PT.func.isRequired,
  saveTopic: PT.func.isRequired,
  topic: PT.string.isRequired,
  gameData: PT.object.isRequired,
  username: PT.string.isRequired,
  loading: PT.bool.isRequired,
  location: PT.object.isRequired
};

const mapStateToProps = (state) => {
  return {
    tweetArr: state.fetchTweetsReducer.data,
    loading: state.fetchTweetsReducer.loading,
    error: state.fetchTweetsReducer.error,
    gameData: state.userReducer.gameData,
    username: state.userReducer.userData.name,
    topic: state.userReducer.gameData.topic
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
    },
    updateVocab: (newPair) => {
      dispatch(updateVocab(newPair));
    },
    saveTopic: (topic) => {
      dispatch(saveTopic(topic));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GamePage);