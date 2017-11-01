import React from 'react';
import ReactModal from 'react-modal';
import PT from 'prop-types';
import { decreaseScore } from '../../actions/updateScore';
import { connect } from 'react-redux';
import _ from 'underscore';

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
    this.handleScoreDec = this.handleScoreDec.bind(this);
  }

  openModal() {
    this.handleScoreDec();
    this.setState({modalIsOpen: true});
  }

  render() {
    return (
      <div>
        <button onClick={this.openModal}>See two random letters from the english word - this will cost you 3 points!</button>
        <ReactModal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          shouldCloseOnOverlayClick={true}
          style={customStyles}
          contentLabel="Letter Hint Modal">
          <h1>{_.sample(this.props.word.text, 2)}</h1>
          <button onClick={this.props.closeModal} >OK back to Game</button>
        </ReactModal>
      </div>
    );
  }
  handleScoreDec() {
    this.props.decreaseScore(3);
  }
}

LetterHint.propTypes = {
  word: PT.object,
  decreaseScore: PT.func,
  closeModal: PT.func
};

const mapStateToProps = (state) => {
  return {
    score: state.userReducer.userData.score
  };
};

const mapDispatchToProps = dispatch => {
  return {
    decreaseScore: (score) => {
      dispatch(decreaseScore(score));
    }
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(LetterHint);