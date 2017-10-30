import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { saveUsername } from '../../actions/saveUsername';
import NewUser from '../UserPage/NewUser';
import UsernameExists from '../Errors/UsernameExists';
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
          <div>
            <span>Enter your twitter handle:</span>
            <form>
              <input placeholder="@handle" onChange={this.handleChange}></input>
              <Link to={(this.state.input.length > 0)? `/user/${this.state.input}` : '/'} onClick={this.handleLogin}>
                <button >
            Login
                </button>
              </Link>
            </form>
            <NewUser />
          </div>
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
