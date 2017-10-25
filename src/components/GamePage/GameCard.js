import React from 'react';
import GameHint from './GameHint';
// import CorrectPopUp from './Results/CorrectPopUp';
// import InCorrectPopUp from './Results/InCorrectPopUp';
import PT from 'prop-types';

class GameCard extends React.Component {
  render() {
    let wordSelection = 'eliminar';
    return (
      <div>
        <p>Player: Olie</p>
        <p>Players Profile Image here</p>
        {this.props.data.map((tweet, i) => {
          return (<div key={i}>
            <h3>Your tweets from: @{tweet.user.screen_name}</h3>

            <p>{tweet.text.split(' ').map((word) => {
              if (word === wordSelection) return word.toUpperCase();
              return word;
            }).join(' ')}</p>

            {this.props.multipleChoice.map((choice, i) => {
              return <button key={i} onClick={(choice.result)?this.props.onTrueClick : this.props.onFalseClick}>{choice.text}</button>;
            })}
            <GameHint 
              onShowHint={this.props.onShowHint}/>
          </div> );
        })}
            
      </div>
    );
  }
}

GameCard.propTypes = {
  data: PT.array.isRequired,
  multipleChoice: PT.array.isRequired,
  onTrueClick: PT.func.isRequired,
  onFalseClick: PT.func.isRequired,
  onShowHint: PT.func.isRequired
};

export default GameCard;