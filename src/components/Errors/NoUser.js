import React from 'react';
import NewUser from '../UserPage/NewUser';
import PT from 'prop-types';

class NoUser extends React.Component {
  render() {
    return (
      <div>
        <h1>Sorry, we dont recognise that username!</h1>
        <h3>please enter a username by clicking below to start.....</h3>
        <NewUser usernameInput={this.props.usernameInput}/>
      </div>
    );
  }
}

NoUser.propTypes = {
  usernameInput: PT.string
};

export default NoUser;