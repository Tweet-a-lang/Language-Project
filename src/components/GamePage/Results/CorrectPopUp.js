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

class CorrectPopUp extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <ReactModal
          isOpen={this.props.modalCorrectIsOpen}
          onRequestClose={this.props.closeModal}
          shouldCloseOnOverlayClick={true}
          style={resultsPopUpStyles}
          contentLabel="Correct Modal">
          <h1>Well done - Correct!</h1>
          <p>10 points added</p>
          <button onClick={this.props.closeModal} >Back to Game</button>
        </ReactModal>
      </div>
    );
  }
}

CorrectPopUp.propTypes = {
  modalCorrectIsOpen: PT.func,
  closeModal: PT.func
};

export default CorrectPopUp;