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
      modalIsOpen: false,
      modalLettersIsOpen: false,
      modalDefinitionIsOpen: false     
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({
      modalIsOpen: false,
      modalLettersIsOpen: false,
      modalDefinitionIsOpen: false 
    });
  }
  render() {
    return (
      <div>
        <button disabled={this.props.disabled} onClick={this.openModal}>Take a Hint</button>
        <ReactModal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          shouldCloseOnOverlayClick={true}
          style={customStyles}
          contentLabel="Hint Selection Modal">
          <h1>Chose your Hint!</h1>
          <LetterHint 
            word={this.props.word}
            closeModal={this.closeModal}/>
          {(!this.props.dictionaryHint) ? '' : 
            <DefinitionHint 
              word={this.props.word}
              dictionaryHint={this.props.dictionaryHint}
              closeModal={this.closeModal} />} 
          <button onClick={this.closeModal} >Changed my mind - Back to Game</button>
        </ReactModal>
      </div>
    );
  }
}

HintSelection.propTypes = {
  word: PT.object,
  disabled: PT.bool,
  dictionaryHint: PT.array
};


export default HintSelection;