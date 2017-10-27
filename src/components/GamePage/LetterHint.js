import React from 'react';
import ReactModal from 'react-modal';
import PT from 'prop-types';

const customStyles = {
  content : {
    top                   : '50%',
    // left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    // marginRight           : '-50%'    
  }
};

class LetterHint extends React.Component {
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
        <button onClick={this.openModal}>See the first letter! 1pt</button>
        <ReactModal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          shouldCloseOnOverlayClick={true}
          style={customStyles}
          contentLabel="Letter Hint Modal">
          <h1>{`${this.props.word[0]}${this.props.word[1]}`}</h1>
          <button onClick={this.closeModal}>Close</button>
        </ReactModal>
      </div>
    );
  }
}

LetterHint.propTypes = {
  word: PT.string
};


export default LetterHint;