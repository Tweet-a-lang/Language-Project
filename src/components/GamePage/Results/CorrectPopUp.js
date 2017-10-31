import React from 'react';
import ReactModal from 'react-modal';
import { connect } from 'react-redux';
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
          <p>{this.props.tweetArr[this.props.correctIndex].answers.chosenWord} in Spanish = {this.props.tweetArr[this.props.correctIndex].answers.translatedWord} in English </p>
          <p>10 points added</p>
          <button onClick={this.props.closeModal} >Back to Game</button>
        </ReactModal>
      </div>
    );
  }
}

CorrectPopUp.propTypes = {
  modalCorrectIsOpen: PT.bool,
  closeModal: PT.func,
  tweetArr: PT.array,
  correctIndex: PT.number
};


const mapStateToProps = (state) => {
  return {
    tweetArr: state.fetchTweetsReducer.data
  };
};

export default connect(mapStateToProps)(CorrectPopUp);