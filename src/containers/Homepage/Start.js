import React from 'react';
import { connect } from 'react-redux';
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
    this.setState({
      input: e.target.value
    });
  }
  handleLogin() {

  }
}

Start.propTypes = {
  error: PT.string
};

const mapStateToProps = (state) => {
  return {
    error: state.userReducer.error
  };
};

const mapDispatchToProps = () => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Start);
