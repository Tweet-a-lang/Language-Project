import React from 'react';
import PT from 'prop-types';


class TweetNav extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.onShowHint}>Show Hint</button>
        <button onClick={this.props.onSkipTweet}>Skip</button>
      </div>
    );
  }
}

TweetNav.propTypes = {
  onShowHint: PT.func.isRequired,
  onSkipTweet: PT.func.isRequired
};

export default TweetNav;