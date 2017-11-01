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
      <div className='column is-one-fifth'>
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
    if(!/'|"|\s/g.test(value) && value.length < 16){
      this.setState({
        input: e.target.value
      });
    }
    else if(value.length >=16) window.alert('Sorry your username is too long');
    else window.alert('Sorry that character is not allowed');
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
