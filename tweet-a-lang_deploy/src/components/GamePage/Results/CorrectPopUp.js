import React from 'react';
import ReactModal from 'react-modal';
import { connect } from 'react-redux';
import PT from 'prop-types';

const resultsPopUpStyles = {
  content : {
    top                   : '50%',
    right                 : 'auto',
    bottom                : 'auto'
  }
};

let spanishWord = '';
let englishWord = '';

class CorrectPopUp extends React.Component {
  render() {
    {spanishWord = (!this.props.tweetArr[this.props.correctIndex]) ? 'tbc' : this.props.tweetArr[this.props.correctIndex].answers.chosenWord;}
    {englishWord = (!this.props.tweetArr[this.props.correctIndex]) ? 'tbc' : this.props.tweetArr[this.props.correctIndex].answers.translatedWord;}
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
          <p>This word pair will be added to your vocab list: <strong>{spanishWord}</strong> = <strong>{englishWord}</strong></p>
          {/* <button onClick={this.props.closeModal} >Back to Game</button> */}
        </ReactModal>
      </div>
    );
  }
}

CorrectPopUp.propTypes = {
  modalCorrectIsOpen: PT.bool,
  closeModal: PT.func,
  tweetArr: PT.array,
  correctIndex: PT.number,
  correctWord: PT.string
};


const mapStateToProps = (state) => {
  return {
    tweetArr: state.fetchTweetsReducer.data
  };
};

export default connect(mapStateToProps)(CorrectPopUp);