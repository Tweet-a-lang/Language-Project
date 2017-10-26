import React from 'react';
import { Link } from 'react-router-dom';


class InCorrectPopUp extends React.Component {
  render() {
    return (
      <div>
        <p>Oops not matched!</p>
        <button>See Answer</button>
        <button><Link to='/GamePage'>Try Again</Link></button>
        <button>Next Tweet</button>
      </div>
    );
  }
}

export default InCorrectPopUp;