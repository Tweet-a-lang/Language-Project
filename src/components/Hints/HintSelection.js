import React from 'react';
import ReactModal from 'react-modal';
import PT from 'prop-types';
import LetterHint from './LetterHint';
import DefinitionHint from './DefinitionHint';

const customStyles = {
  content : {
    top                   : '50%',
    // left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    // marginRight           : '-50%'    
  }
};

class HintSelection extends React.Component {
  constructor(props) {
    super(props);
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
        <button onClick={this.openModal}>Take a Hint</button>
        <ReactModal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          shouldCloseOnOverlayClick={true}
          style={customStyles}
          contentLabel="Hint Selection Modal">
          <h1>Chose your Hint!</h1>
          <LetterHint 
            word={this.props.word}/>
          <DefinitionHint 
            word={this.props.word}/>
          <button onClick={this.closeModal} >Close</button>
        </ReactModal>
      </div>
    );
  }
}

HintSelection.propTypes = {
  word: PT.object
};


export default HintSelection;