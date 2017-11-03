import React from 'react';
import ReactModal from 'react-modal';
import PT from 'prop-types';
import postNewUser from '../../actions/postNewUser';
import { Link } from 'react-router-dom';
// import UsernameExists from '../Errors/UsernameExists';
import { connect } from 'react-redux';


const customStyles = {
  content: {
    top: '50%',
    // left                  : '50%',
    right: 'auto',
    bottom: 'auto',
    // marginRight           : '-50%'    
  }
};

class NewUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
      input: (!this.props.usernameInput)? '' : this.props.usernameInput
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleNewUser = this.handleNewUser.bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
    this.handleNewUser();
  }
  render() {
    return (
      <span>
        <button onClick={this.openModal}>New User</button>
        <ReactModal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          shouldCloseOnOverlayClick={true}
          style={customStyles}
          contentLabel="Create New User">
          <h1>Welcome to Tweet-a-lang!</h1>
          <form>
            <input type="text" placeholder="handle" value={this.state.input} onChange={this.handleChange}></input>
            <Link to={(this.state.input.length > 0) ? `/user/${this.state.input}` : '/'} onClick={this.closeModal}>
              <button>Submit</button>
            </Link>
          </form>
        </ReactModal>
      </span>
    );
  }
  handleChange(e) {
    const { value } = e.target;
    if (!/'|"|\s/g.test(value) && value.length < 16) {
      this.setState({
        input: e.target.value
      });
    }
    else if (value.length >= 16) window.alert('Sorry your username is too long');
    else window.alert('Sorry that character is not allowed');
  }
  handleNewUser() {
    this.props.postNewUser(this.state.input);
  }
}



NewUser.propTypes = {
  userData: PT.object,
  postNewUser: PT.func,
  usernameInput: PT.string
};

const mapStateToProps = (state) => {
  return {
    userData: state.userReducer.userData
  };
};

const mapDispatchToProps = dispatch => {
  return {
    postNewUser: (name) => {
      dispatch(postNewUser(name));
    }
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(NewUser);
