import React from 'react';
// import { connect } from 'react-redux';
import GameNavbar from './GameNavbar';
import GameCard from './GameCard';
import PT from 'prop-types';

class GamePage extends React.Component {
  render() {
    console.log('PROPS', this.props);
    return (
      <div>
        <GameNavbar />
        <p>Player: {this.props.match.params.username}</p>
        <p>Players Profile Image here</p>
        <GameCard />
      </div>
    );
  }
}

GamePage.propTypes = {
  match: PT.object
};

export default GamePage;