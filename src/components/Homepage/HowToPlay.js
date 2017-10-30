

//solution for spliting up the modal to the container and presentational component
//https://stackoverflow.com/questions/45266732/how-to-trigger-react-modal-from-the-layout-container


import React from 'react';
import ReactModal from 'react-modal';

const customStyles = {
  content : {
    top                   : '50%',
    // left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
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
                    
          <h2>Rules of the game</h2>
          <p>These are the rules my friend</p>
          <p>Lots and lots of rules, more and more rules, fab playing time here!</p>
          <button onClick={this.closeModal}>I am ready to play</button>
        </ReactModal>
      </div>
    );
  }
}

export default HowToPlay;