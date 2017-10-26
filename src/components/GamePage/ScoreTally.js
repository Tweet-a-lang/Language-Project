import React from 'react';
import { connect } from 'react-redux';
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
  score: PT.number
};

const mapStateToProps = state => {
  return {
    score: state.score
  };
};


export default connect(mapStateToProps)(ScoreTally);