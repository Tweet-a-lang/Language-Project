import React from 'react';
import PT from 'prop-types';
import HintSelection from '../Hints/HintSelection';
import CorrectPopUp from './Results/CorrectPopUp';
import InCorrectPopUp from './Results/InCorrectPopUp';
import '../../css/gamepage.css';
var classNames = require('classnames');

let tweetDisabledArr = [];
let tweetResultArr = [];

const GamePageUI = ({ tweetArr, onCorrect, onIncorrect, modalCorrectIsOpen, modalInCorrectIsOpen, closeModal, tweet0, tweet1, tweet2, tweet3, tweet4, correctTweetIndex, tweetAnswer0, tweetAnswer1, tweetAnswer2, tweetAnswer3, tweetAnswer4 }) => (

  <div className="game-card">
    <div className='tweet-container'>
      {tweetResultArr = [tweetAnswer0, tweetAnswer1, tweetAnswer2, tweetAnswer3, tweetAnswer4]}
      
      {tweetArr.map((tweetData, tweetIndex) => {
        
        let answerStyle = (tweetResultArr[tweetIndex] === 'incorrect') ? classNames({
          'tweetIncorrect': true
        }) :
          (tweetResultArr[tweetIndex] === 'correct') ? classNames({
            'tweetCorrect': true
          }) : classNames({
            'tweet': true
          });
        return (<div key={tweetIndex} className={answerStyle}>
          <img className="tweet-avatar" src={tweetData.tweet.user_profile_image} />
          <h5>@{tweetData.tweet.user_screen_name}</h5>
          {parseTweet(tweetData)}
          {tweetDisabledArr = [tweet0, tweet1, tweet2, tweet3, tweet4]}
          <div className="multiplechoice">
            {tweetData.answers.choices.map((choice, buttonIndex) => {
              return <button key={buttonIndex} className='choice-button' type='submit' value={[tweetData.tweet.id, tweetIndex]} disabled={tweetDisabledArr[tweetIndex]} onClick={(choice.result) ? onCorrect : onIncorrect}>{choice.text}</button>;
            })}
            <HintSelection
              word={tweetData.answers.choices[0]}
              disabled={tweetDisabledArr[tweetIndex]}
              dictionaryHint={tweetData.answers.hints} /> </div>
        </div>);
      })}
      <CorrectPopUp
        closeModal={closeModal}
        modalCorrectIsOpen={modalCorrectIsOpen}
        correctIndex={correctTweetIndex} />
      <InCorrectPopUp
        closeModal={closeModal}
        modalInCorrectIsOpen={modalInCorrectIsOpen} />
    </div>
  </div>
);

function parseTweet(tweetData) {
  let linkCount = 0;
  let dataIfUndefined = (!tweetData || !tweetData.answers) ? 'tbc' : tweetData.answers.chosenWord;

  const chosenWordRegEx = new RegExp(dataIfUndefined, 'i');
  const linkRegEx = /(https?:\/\/[^\s]+)/;

  return tweetData.tweet.text.split(' ').map((word, i) => {

    if (word.match(chosenWordRegEx)) return <strong key={i} className='chosen-word'>{word.toUpperCase() + ' '}</strong>;
    if (word.match(linkRegEx)) {
      if (tweetData.tweet.entities.urls[linkCount] !== undefined) {
        word = <a key={i} href={tweetData.tweet.entities.urls[linkCount].expanded_url} target='_.blank'>{word}</a>;
      } else {
        word = <a key={i} href={word} target='_.blank'>{word}</a>;
      }
      linkCount++;
      return word;
    }
    return word + ' ';
  });

}

GamePageUI.propTypes = {
  username: PT.string.isRequired,
  tweetArr: PT.array.isRequired,
  onCorrect: PT.func.isRequired,
  onIncorrect: PT.func.isRequired,
  modalCorrectIsOpen: PT.bool.isRequired,
  modalInCorrectIsOpen: PT.bool.isRequired,
  closeModal: PT.func.isRequired,
  tweet0: PT.bool.isRequired,
  tweet1: PT.bool.isRequired,
  tweet2: PT.bool.isRequired,
  tweet3: PT.bool.isRequired,
  tweet4: PT.bool.isRequired,
  correctTweetIndex: PT.number.isRequired,
  tweetAnswer0: PT.string.isRequired,
  tweetAnswer1: PT.string.isRequired,
  tweetAnswer2: PT.string.isRequired,
  tweetAnswer3: PT.string.isRequired,
  tweetAnswer4: PT.string.isRequired
};

export default GamePageUI;