import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PT from 'prop-types';
import fetchUser from '../../actions/fetchUser';

class UserPage extends React.Component {
  constructor(props) {
    super(props);
    this.handleStartGame = this.handleStartGame.bind(this);
    this.handleLogOut = this.handleLogOut.bind(this);
  }
  
  componentDidMount() {
    const username = this.props.match.params.username;
    this.props.fetchUser(username);
  }
  render () {
    return (
      <div>
        <h1>{this.props.userData.name}</h1>
        <h3>Current Overall Score: {this.props.userData.score}</h3>
        <Link to={`/tweets/${this.props.userData.name}`} onClick={this.handleStartGame}>
          <button>START GAME</button>
        </Link>
        <Link to={'/'} onClick={this.handleLogOut}>
          <button>LOG OUT</button>
        </Link>
      </div>
    );
  }

  handleStartGame() {
    console.log('handling start game');
  }

  handleLogOut() {
    console.log('handling log out');
  }

}

UserPage.propTypes = {
  match: PT.object,
  fetchUser: PT.func,
  userData: PT.object
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