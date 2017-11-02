import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PT from 'prop-types';
import fetchUser from '../../actions/fetchUser';
import LogOut from './LogOut';
import NoUser from '../Errors/NoUser';
import LoadingPage from '../Errors/LoadingPage';
import UsernameExists from '../Errors/UsernameExists';
import UserVocab from './UserVocab';
import { saveTopic } from '../../actions/saveTopic';

class UserPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chosenTopic: '',
      radioButton1: false,
      radioButton2: false,
      radioButton3: false,
      radioButton4: false,
      radioButton5: false,
      radioButton6: true
    };
    this.handleStartGame = this.handleStartGame.bind(this);
    this.handleLogOut = this.handleLogOut.bind(this);
    this.handleTopicSelection = this.handleTopicSelection.bind(this);
  }

  componentDidMount() {
    const username = this.props.match.params.username;
    this.props.fetchUser(username);
  }
  render() {
    return (
      <div>
        {(this.props.loading) ? <LoadingPage /> : (this.props.error === 'Request failed with status code 405') ? <UsernameExists /> :
          (this.props.error === 'Request failed with status code 404') ? <div>
            <NoUser usernameInput={this.props.match.params.username} />
          </div> :
            <div>
              <h1>Hi, {this.props.username}</h1>
              <h3>Total Score: {this.props.score}</h3>
              <span>Choose your tweety topic:</span>
              <div>
                <div className="radio">
                  <label>
                    <input
                      type="radio"
                      name="value"
                      onChange={this.handleTopicSelection}
                      value="food"
                      checked={this.state.radioButton1}
                    />Food
                  </label>
                </div>
                <div className="radio">
                  <label>
                    <input
                      type="radio"
                      name="value"
                      onChange={this.handleTopicSelection}
                      value="sport"
                      checked={this.state.radioButton2}
                    />Sport
                  </label>
                </div>
                <div className="radio">
                  <label>
                    <input
                      type="radio"
                      name="value"
                      onChange={this.handleTopicSelection}
                      value="news"
                      checked={this.state.radioButton3}
                    />News
                  </label>
                </div>
                <div className="radio">
                  <label>
                    <input
                      type="radio"
                      name="value"
                      onChange={this.handleTopicSelection}
                      value="technology"
                      checked={this.state.radioButton4}
                    />Technology
                  </label>
                </div>
                <div className="radio">
                  <label>
                    <input
                      type="radio"
                      name="value"
                      onChange={this.handleTopicSelection}
                      value="fashion"
                      checked={this.state.radioButton5}
                    />Fashion
                  </label>
                </div>
                <div className="radio">
                  <label>
                    <input
                      type="radio"
                      name="value"
                      onChange={this.handleTopicSelection}
                      value="random"
                      checked={this.state.radioButton6}
                    />Random
                  </label>
                </div>
              </div>
              <Link onClick={this.handleStartGame} to={`/tweets/${this.props.username}?topic=${this.state.chosenTopic}`}>
                <button>START GAME</button>
              </Link>
              <LogOut />
              <UserVocab />
            </div>
        }
      </div>
    );
  }

  handleStartGame() {
    this.props.saveTopic(this.state.chosenTopic);
  }

  handleLogOut() {
  }

  handleTopicSelection(e) {
    this.setState({
      chosenTopic: e.target.value.toLowerCase(),
      radioButton1: (e.target.value === 'food') ? true : false,
      radioButton2: (e.target.value === 'sport') ? true : false,
      radioButton3: (e.target.value === 'news') ? true : false,
      radioButton4: (e.target.value === 'technology') ? true : false,
      radioButton5: (e.target.value === 'fashion') ? true : false,
      radioButton6: (e.target.value === 'random') ? true : false
    });
  }

}

UserPage.propTypes = {
  match: PT.object.isRequired,
  fetchUser: PT.func.isRequired,
  userData: PT.object.isRequired,
  language: PT.bool.isRequired,
  username: PT.string.isRequired,
  score: PT.number.isRequired,
  loading: PT.bool.isRequired,
  error: PT.string.isRequired,
  saveTopic: PT.func.isRequired
};


const mapStateToProps = (state) => {
  return {
    loading: state.userReducer.loading,
    error: state.userReducer.error,
    userData: state.userReducer.userData,
    score: state.userReducer.userData.score,
    username: state.userReducer.userData.name
  };
};

const mapDispatchToProps = dispatch => ({
  fetchUser: (username) => {
    dispatch(fetchUser(username));
  },
  saveTopic: (topic) => {
    dispatch(saveTopic(topic));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);