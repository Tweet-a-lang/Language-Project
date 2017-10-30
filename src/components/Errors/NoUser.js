import React from 'react';
import NewUser from '../UserPage/NewUser';

class NoUser extends React.Component {
  render() {
    return (
      <div>
        <h1>Sorry, we dont recognise that username!</h1>
        <h3>please enter a username by clicking below to start.....</h3>
        <NewUser />
      </div>
    );
  }
}

export default NoUser;