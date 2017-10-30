import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PT from 'prop-types';
import fetchUser from '../../actions/fetchUser';
import LogOut from './LogOut';
import NoUser from '../Errors/NoUser';
import LoadingPage from '../Errors/LoadingPage';
import UsernameExists from '../Errors/UsernameExists';

class UserPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      language: 'spanish',
      radioButton1: true,
      radioButton2: false
    };
    this.handleStartGame = this.handleStartGame.bind(this);
    this.handleLogOut = this.handleLogOut.bind(this);
    this.handleLangSelection = this.handleLangSelection.bind(this);
  }
  
  componentDidMount() {
    const username = this.props.match.params.username;
    this.props.fetchUser(username);
  } 
  render () {
    return (
      <div>
        {(this.props.loading) ? <LoadingPage /> : (this.props.error === 'Request failed with status code 405') ? <UsernameExists /> :
          (!this.props.username) ? <div>
            <NoUser />
          </div> : 
            <div>
              <h1>Hi, {this.props.username}</h1>
              <h3>Total Score: {this.props.score}</h3>
              <span>Choose your language:</span>
              <div>
                <div className="radio">
                  <label><input
                    type="radio"
                    name="value"
                    onChange={this.handleLangSelection}
                    value="spanish"
                    checked={this.state.radioButton1}
                  />Spanish</label>
                </div>
                <div className="radio">
                  <label><input
                    type="radio"
                    name="value"
                    onChange={this.handleLangSelection}
                    value="chance"
                    checked={this.state.radioButton2}
                  />Take a chance</label>
                </div>
              </div>
              <Link onClick={this.handleStartGame} to={`/tweets/${this.props.username}`}>
                <button>START GAME</button>
              </Link>
              <LogOut />
            </div>
        }
      </div>
    );
  }

  handleStartGame() {
  }

  handleLogOut() {
  }

  handleLangSelection(e) {
    this.setState({
      language: e.target.value,
      radioButton1: (e.target.value === 'spanish') ? true : false,
      radioButton2: (e.target.value === 'chance') ? true : false
    });
  }

}

UserPage.propTypes = {
  match: PT.object,
  fetchUser: PT.func,
  userData: PT.object,
  language: PT.bool,
  username: PT.string,
  score: PT.number,
  loading: PT.bool,
  error: PT.string
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
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);