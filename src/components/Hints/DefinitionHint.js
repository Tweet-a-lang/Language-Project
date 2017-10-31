import React from 'react';
import ReactModal from 'react-modal';
import PT from 'prop-types';
import { decreaseScore } from '../../actions/updateScore';
import { connect } from 'react-redux';
import Parser from 'html-react-parser';

const customStyles = {
  content : {
    top                   : '50%',
    right                 : 'auto',
    bottom                : 'auto'   
  }
};

class DefinitionHint extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false   
    };
    this.openModal = this.openModal.bind(this);
    this.handleScoreDec = this.handleScoreDec.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
    this.handleScoreDec();
  }

  render() {
    return (
      <div>
        <button onClick={this.openModal}>See a definition - it will cost you 2 points!</button>
        <ReactModal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          shouldCloseOnOverlayClick={true}
          style={customStyles}
          contentLabel="Definition Hint Modal">
          <h3>Hint - Dictionary Definition of the Correct Answer</h3>
          {this.props.dictionaryHint.map((hint, i) => <div key={i}>{Parser(hint)}</div>)}
          <button onClick={this.props.closeModal} >OK back to Game</button>
        </ReactModal>
      </div>
    );
  }
  handleScoreDec() {
    this.props.decreaseScore(2);
  }
}

DefinitionHint.propTypes = {
  word: PT.object,
  decreaseScore: PT.func,
  closeModal: PT.func,
  dictionaryHint: PT.array
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


export default connect(mapStateToProps, mapDispatchToProps)(DefinitionHint);