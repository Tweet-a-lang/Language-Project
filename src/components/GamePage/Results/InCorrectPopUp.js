import React from 'react';
import ReactModal from 'react-modal';
import PT from 'prop-types';

const resultsPopUpStyles = {
  content : {
    top                   : '50%',
    // left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    // marginRight           : '-50%'    
  }
};

class InCorrectPopUp extends React.Component {
  constructor(props) {
    super(props);
  }

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
          <p>Try a hint</p>
          <button onClick={this.props.closeModal} >Back to Game</button>
        </ReactModal>
      </div>
    );
  }
}

InCorrectPopUp.propTypes = {
  modalInCorrectIsOpen: PT.func,
  closeModal: PT.func
};

export default InCorrectPopUp;