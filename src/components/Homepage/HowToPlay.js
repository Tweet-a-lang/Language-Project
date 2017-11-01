

//solution for spliting up the modal to the container and presentational component
//https://stackoverflow.com/questions/45266732/how-to-trigger-react-modal-from-the-layout-container


import React from 'react';
import ReactModal from 'react-modal';

const customStyles = {
  content : {
    // top                   : '50%',
    // left                  : '50%',
    // right                 : 'auto',
    // bottom                : 'auto',
    // marginRight           : '-50%'    
  }
};


class HowToPlay extends React.Component {
  constructor () {
    super();
    this.state = {
      modalIsOpen: false   
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {
    return (
      <div>
        <button onClick={this.openModal}>How to Play</button>
                      
      
                                                 
        <ReactModal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          shouldCloseOnOverlayClick={true}
          style={customStyles}
          contentLabel="How To Play Modal">
                    
          <h1>Welcome to tweet-a-lang!</h1>
          <h2>The aim of the game:</h2>
          <p>Tweet-a-lang is a fun way to practise your language learning. We use real tweets from native speakers so you can learn the language they really speak. You can choose a topic and click on the links and articles they are tweeting about too, so if you are interested in their content you can go and follow them on twitter. Tweet-a-lang will not only help you learn your desired language but also connect you with people from all over the world!</p>
          <h2>How to play:</h2>
          <ul>
            <li>First step is to create a username - you can use your twitter handle which will display your profile picture on our leaderboard! Otherwise just make one up! You will still show up on our leaderboard but we will supply the picture :)</li>
            <li>Once you have created your username login on the homepage - this will take you to your profile page.</li>
            <li>Select a topic for the tweets you want to translate and hit start game!</li>
            <li>You will start every game with zero points. You will be given 5 tweets and from each tweet there will be one highlighted word that you need to translate. Select your answer from the multiple choice buttons below the tweet.</li>
            <li>Every answer you guess correctly you will earn 10 points!</li>
            <li>You also have a selection of 2 hints, which you can access once you have earned some points in that game.</li>
            <li>For a cost of 3 points you can see 2 random letters from the translated word</li>
            <li>For a cost of 5 points you can see a definition of the translated word - there is only one definition per word.</li>
            <li>Once you have answered all 5 tweets click on End Game if you want to go back to your profile page, or Next Game to start another round.</li>
            <li>Your points for that game will be added to your overall score which you can see on your profile page. If you are one of the top 10 highest scorers you will be displayed on our leaderboard.</li>
            <li>If you wish to quit the game and see if you have made it into the top 10, just click on Log Out on your profile page to be taken back to the home screen.</li>
          </ul>
          <p>Now you are ready to play!</p>
          <p>Enjoy!</p>
          <button onClick={this.closeModal}>Back</button>
        </ReactModal>
      </div>
    );
  }
}

export default HowToPlay;