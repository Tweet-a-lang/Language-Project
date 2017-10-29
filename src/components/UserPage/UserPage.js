import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PT from 'prop-types';
import fetchUser from '../../actions/fetchUser';
import LogOut from './LogOut';

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
        <h1>Hi, {this.props.userData.name}</h1>
        <h3>Current Total Score: {this.props.userData.score}</h3>
        <span>Choose your language:</span>
        <div>
          <div className="radio">
            <label>
              <input
                type="radio"
                name="value"
                onChange={this.handleLangSelection}
                value="spanish"
                checked={this.state.radioButton1}
              />
                                Spanish
            </label>
          </div>
          <div className="radio">
            <label>
              <input
                type="radio"
                name="value"
                onChange={this.handleLangSelection}
                value="chance"
                checked={this.state.radioButton2}
              />
                                Take a chance
            </label>
          </div>
        </div>
        <Link to={`/tweets/${this.props.userData.name}`} onClick={this.handleStartGame}>
          <button>START GAME</button>
        </Link>
        <LogOut />
      </div>
    );
  }

  handleStartGame() {
    console.log('handling start game');
  }

  handleLogOut() {
    console.log('handling log out');
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
  language: PT.bool
};


const mapStateToProps = (state) => {
  console.log(state);
  return {
    userData: state.userReducer.userData,
    loading: state.userReducer.loading,
    error: state.userReducer.error
  };
};

const mapDispatchToProps = dispatch => ({
  fetchUser: (username) => {
    dispatch(fetchUser(username));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);