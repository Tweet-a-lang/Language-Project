import React from 'react';
import NewUser from '../UserPage/NewUser';

class UsernameExists extends React.Component {
  render() {
    return (
      <div>
        <h1>That name is taken!</h1>
        <h3>please try again...</h3>
        <NewUser />
      </div>
    );
  }
}

export default UsernameExists;