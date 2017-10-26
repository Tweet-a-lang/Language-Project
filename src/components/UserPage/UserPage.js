import React from 'react';
import { connect } from 'react-redux';
import PT from 'prop-types';
import fetchUser from '../../actions/fetchUser';

class UserPage extends React.Component {
  constructor(props) {
    super(props);
  }
  
  componentDidMount() {
    const username = this.props.match.params.username;
    console.log('CDM username:', username);
    this.props.fetchUser(username);
  }
  render () {
    return (
      <div>
        <h1>{this.props.userData.name}</h1>
        <h3>Current Score: {this.props.userData.score}</h3>
      </div>
    );
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
    userData: state.fetchUserReducer.userData,
    loading: state.fetchUserReducer.loading,
    error: state.fetchUserReducer.error
  };
};

const mapDispatchToProps = dispatch => ({
  fetchUser: (username) => {
    dispatch(fetchUser(username));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);