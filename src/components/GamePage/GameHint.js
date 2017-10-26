import React from 'react';
import PT from 'prop-types';


class GameHint extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.onShowHint}>Show Hint</button>
      </div>
    );
  }
}

GameHint.propTypes = {
  onShowHint: PT.func.isRequired
};

export default GameHint;