import React from 'react';
import ReactModal from 'react-modal';
import PT from 'prop-types';

const resultsPopUpStyles = {
  content : {
    top                   : '50%',
    right                 : 'auto',
    bottom                : 'auto'
  }
};

class InCorrectPopUp extends React.Component {
  render() {
    return (
      <div>
        <ReactModal
          isOpen={this.props.modalInCorrectIsOpen}
          onRequestClose={this.props.closeModal}
          shouldCloseOnOverlayClick={true}
          style={resultsPopUpStyles}
          contentLabel="InCorrect Modal">
          <h1>Oops WRONG - better luck next time!</h1>
          {/* <button onClick={this.props.closeModal} >Back to Game</button> */} 
        </ReactModal>
      </div>
    );
  }
}

InCorrectPopUp.propTypes = {
  modalInCorrectIsOpen: PT.bool,
  closeModal: PT.func
};

export default InCorrectPopUp;