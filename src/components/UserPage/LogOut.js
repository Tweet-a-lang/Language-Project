import React from 'react';
import ReactModal from 'react-modal';
import { Link } from 'react-router-dom';


const customStyles = {
  content : {
    top                   : '50%',
    // left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    // marginRight           : '-50%'    
  }
};

class LogOut extends React.Component {
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
        <button className='button is-info is-inverted' onClick={this.openModal}>Log Out</button>
        <ReactModal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          shouldCloseOnOverlayClick={false}
          style={customStyles}
          contentLabel="Hint Selection Modal">
          <h1>Are you sure you want to leave?</h1>
          <button className='button is-info is-inverted' onClick={this.closeModal} >Stay</button>
          <Link to={'/'}>
            <button className='button is-info is-inverted' onClick={this.closeModal} >Log Out</button>
          </Link>
        </ReactModal>
      </div>
    );
  }
}



export default LogOut;