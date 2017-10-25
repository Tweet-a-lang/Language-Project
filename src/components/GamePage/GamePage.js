import React from 'react';
import GameNavbar from './GameNavbar';
import Data from '../../../public/data/muyinteresante.json';
// import CorrectPopUp from './Results/CorrectPopUp';
// import InCorrectPopUp from './Results/InCorrectPopUp';
import GameCard from './GameCard';

class GamePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: Data,
      multipleChoice: [
        {
          text: 'Eliminate',
          result: true
        },
        {
          text: 'Throw',
          result: false
        },
        {
          text: 'Handbag',
          result: false
        }
      ],
      score: 0
    };
    this.handleNextRoundClick = this.handleNextRoundClick.bind(this);
    this.fetchNextTweets = this.fetchNextTweets.bind(this);
    this.increaseScore = this.increaseScore.bind(this);
    this.handleFalseClick = this.handleFalseClick.bind(this);
    this.handleTrueClick = this.handleTrueClick.bind(this);
    this.handleShowHint = this.handleShowHint.bind(this);
    this.decreaseScore = this.decreaseScore.bind(this);
  }
  render() {
    return (
      <div>
        <GameNavbar
          score={this.state.score} />
        <GameCard
          data={this.state.data}
          multipleChoice={this.state.multipleChoice}
          onFalseClick={this.handleFalseClick}
          onTrueClick={this.handleTrueClick}
          onShowHint={this.handleShowHint} />

        <button onClick={this.handleNextRoundClick}>Next Round</button>
      </div>
    );
  }
    
  handleTrueClick(e) {
    e.preventDefault();
    this.increaseScore();
  }

  handleFalseClick(e) {
    e.preventDefault();
  }
    
  increaseScore() {
    this.setState({
      score: this.state.score + 10
    });
  }

  handleShowHint(e) {
    e.preventDefault();
    this.decreaseScore();
  }

  decreaseScore() {
    this.setState({
      score: this.state.score - 2
    });
  }

  handleNextRoundClick(e) {
    e.preventDefault();
    this.fetchNextTweets();
  }

  fetchNextTweets() {
    // console.log('I will fetch more tweets and rerender the GameCard');
  }

}

export default GamePage;