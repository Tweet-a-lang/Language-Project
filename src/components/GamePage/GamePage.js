import React from 'react';
// import { connect } from 'react-redux';
import GameNavbar from './GameNavbar';
import GameCard from './GameCard';

class GamePage extends React.Component {
  constructor(props) {
    super(props);
    // this.handleNextRoundClick = this.handleNextRoundClick.bind(this);
    // this.handleFalseClick = this.handleFalseClick.bind(this);
    // this.handleTrueClick = this.handleTrueClick.bind(this);
    // this.handleShowHint = this.handleShowHint.bind(this);
    // this.handleSkipTweet = this.handleSkipTweet.bind(this);
  }
  // componentDidMount() {
  //   this.props.fetchTweets();   
  // }

  // onFalseClick={this.handleFalseClick}
  // onTrueClick={this.handleTrueClick}
  // onShowHint={this.handleShowHint}
  // onSkipTweet={this.handleSkipTweet} 

  render() {
    return (
      <div>
        <GameNavbar />
        <p>Player: Olie</p>
        <p>Players Profile Image here</p>
        <GameCard  />
      </div>
    );
  }
    
  // handleTrueClick(e) {
  //   e.preventDefault();
  //   this.increaseScore();
  // }

  // handleFalseClick(e) {
  //   e.preventDefault();
  // }
    

  // handleShowHint(e) {
  //   e.preventDefault();
  //   this.decreaseScore();
  //   console.log('You will see a hint');
  // }

  // handleSkipTweet(e) {
  //   e.preventDefault();
  //   console.log('OK to skip');
  // }


  // handleNextRoundClick(e) {
  //   e.preventDefault();
  //   this.fetchNextTweets();
  // }

  // fetchNextTweets() {
  //   // console.log('I will fetch more tweets and rerender the GameCard');
  // }

}
 
export default GamePage;