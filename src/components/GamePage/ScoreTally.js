import React from 'react';
import PT from 'prop-types';

class ScoreTally extends React.Component {
  render() {
    return (
      <div>
        <span>Score: {this.props.score}</span>
      </div>
    );
  }
}

ScoreTally.propTypes = {
  score: PT.number.isRequired
};


export default ScoreTally;