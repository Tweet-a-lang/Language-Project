import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PT from 'prop-types';
import fetchUser from '../../actions/fetchUser';

class UserPage extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
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
        <form onSubmit={this.handleSubmit}>
          <button type="submit" ><Link to={`/tweets/${this.props.userData.name}`}>START GAME</Link></button>
        </form> 

      </div>
    );
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.input.length === 0) return;
    this.props.saveUsername(this.state.input);
  }

}

UserPage.propTypes = {
  match: PT.object,
  fetchUser: PT.func,
  userData: PT.object,
  saveUsername: PT.func
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