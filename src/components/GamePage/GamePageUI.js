import React from 'react';
import PT from 'prop-types';
import HintSelection from '../Hints/HintSelection';
import CorrectPopUp from './Results/CorrectPopUp';
import InCorrectPopUp from './Results/InCorrectPopUp';
import GameScore from '../../containers/GamePage/GameScore';
import _ from 'underscore';

let tweetDisabledArr = [];

const GamePageUI = ({username,tweetArr,onCorrect,onIncorrect,modalCorrectIsOpen,modalInCorrectIsOpen,closeModal,tweet0, tweet1, tweet2, tweet3, tweet4}) => (
  
  <div>
    <p>Player: {username}</p>
    <GameScore />
    {tweetArr.map((tweetData, tweetIndex) => {
      return (<div key={tweetIndex}>
        <h5>Tweets from: @{tweetData.tweet.user_screen_name}</h5>

        <p>{tweetData.tweet.text.split(' ').map((word) => {
          if (word === tweetData.answers.chosenWord) return word.toUpperCase();
          return word;
        }).join(' ')}</p>
        {tweetDisabledArr = [tweet0, tweet1, tweet2, tweet3, tweet4]}
            
        {_.shuffle(tweetData.answers.choices).map((choice, buttonIndex) => {
          return <button key={buttonIndex} type='submit' value={[tweetData.tweet.id, tweetIndex]} disabled={tweetDisabledArr[tweetIndex]} onClick={(choice.result) ? onCorrect : onIncorrect }>{choice.text}</button>;
        })}
        <div><HintSelection
          word={tweetData.answers.choices[0]}/></div>
        <div><CorrectPopUp closeModal={closeModal} modalCorrectIsOpen={modalCorrectIsOpen}/></div>
        <div><InCorrectPopUp closeModal={closeModal} modalInCorrectIsOpen={modalInCorrectIsOpen} /></div>
      </div>);
    })}
  </div>
);



GamePageUI.propTypes = {
  username: PT.string,
  tweetArr: PT.array,
  onCorrect: PT.func,
  onIncorrect: PT.func,
  modalCorrectIsOpen: PT.bool,
  modalInCorrectIsOpen: PT.bool,
  closeModal: PT.func,
  tweet0: PT.bool,
  tweet1: PT.bool,
  tweet2: PT.bool,
  tweet3: PT.bool,
  tweet4: PT.bool
};

export default GamePageUI;