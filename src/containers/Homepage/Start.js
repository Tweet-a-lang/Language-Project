import React from 'react';
import { connect } from 'react-redux';
import { saveUsername } from '../../actions/saveUsername';
import UsernameExists from '../../components/Errors/UsernameExists';
import UserInput from '../../components/Homepage/UserInput';
import PT from 'prop-types';

class Start extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }
  render() {
    return (
      <div>
        {(this.props.error === 'Request failed with status code 405') ? <UsernameExists /> :
          <UserInput 
            onChange={this.handleChange}
            input={this.state.input}
            onLogin={this.handleLogin}
          />
        }
      </div>
    );
  }


  handleChange(e) {
    const {value} = e.target;
    if(!value.includes(' ') && value.length < 15){
      this.setState({
        input: e.target.value
      });
    }
    else window.alert('usernames cannot contain spaces and must be less than 15 characters in length');
  }
  handleLogin() {
    this.props.saveUsername(this.state.input);
  }
}

Start.propTypes = {
  saveUsername: PT.func.isRequired,
  error: PT.string
};

const mapStateToProps = (state) => {
  return {
    error: state.userReducer.error
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    saveUsername: (username) => {
      dispatch(saveUsername(username));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Start);
