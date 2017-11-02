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
  }

  render() {
    return (
      <div>
        {(this.props.score < 5) ? 
          <div>
            <p>See a definition of the English word <button disbaled="true">not enough points!</button></p> </div> :
          <div>
            <p>See a definition of the English word <button onClick={this.openModal}>5 points!</button></p>
            <ReactModal
              isOpen={this.state.modalIsOpen}
              onRequestClose={this.props.closeModal}
              shouldCloseOnOverlayClick={true}
              style={customStyles}
              contentLabel="Definition Hint Modal">
              {this.props.dictionaryHint.map((hint, i) => {
                hint = `"${hint}"`;
                return <div key={i}>{Parser(hint)}</div>;
              })}
              <button onClick={this.handleScoreDec} >OK back to Game</button>
            </ReactModal>
          </div>
        }
      </div>
    );
  }
  handleScoreDec(e) {
    this.props.decreaseScore(5);
    this.props.closeModal(e);
  }
}

DefinitionHint.propTypes = {
  word: PT.object,
  decreaseScore: PT.func,
  closeModal: PT.func,
  dictionaryHint: PT.array,
  score: PT.number.isRequired
};

const mapStateToProps = (state) => {
  return {
    score: state.userReducer.gameData.score
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