import React from 'react';
import { connect } from 'react-redux';
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
        {(this.props.gameScore <3) ? <div>
          <p>Earn points to buy <button disabled="true">clues!</button></p></div> :
          <div>
            <p>You can now use points to buy a <button disabled={this.props.disabled} onClick={this.openModal}>clue?</button></p>
            <ReactModal
              isOpen={this.state.modalIsOpen}
              onRequestClose={this.closeModal}
              shouldCloseOnOverlayClick={true}
              style={customStyles}
              contentLabel="Hint Selection Modal">
              <h1>Choose your Hint!</h1>
              <LetterHint 
                word={this.props.word}
                closeModal={this.closeModal}/>
              {(!this.props.dictionaryHint) ? '' : 
                <DefinitionHint 
                  word={this.props.word}
                  dictionaryHint={this.props.dictionaryHint}
                  closeModal={this.closeModal} />} 
              <button onClick={this.closeModal} >Back</button>
            </ReactModal>
          </div>
        }
      </div>
    );
  }
}

HintSelection.propTypes = {
  word: PT.object.isRequired,
  disabled: PT.bool.isRequired,
  dictionaryHint: PT.any.isRequired,
  gameScore: PT.number.isRequired
};

const mapStateToProps = state => {
  return {
    gameScore: state.userReducer.gameData.score
  };
};


export default connect(mapStateToProps)(HintSelection);
