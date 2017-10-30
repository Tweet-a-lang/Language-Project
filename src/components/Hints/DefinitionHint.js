import React from 'react';
import ReactModal from 'react-modal';
import PT from 'prop-types';
import { decreaseScore } from '../../actions/updateScore';
import { connect } from 'react-redux';

const customStyles = {
  content : {
    top                   : '50%',
    // left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    // marginRight           : '-50%'    
  }
};

class DefinitionHint extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false   
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleScoreDec = this.handleScoreDec.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
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
          <h1>Definition of the english word goes here...</h1>
          <button onClick={this.closeModal} >Close</button>
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
  decreaseScore: PT.func
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