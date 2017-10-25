import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {saveUsername} from '../../actions/saveUsername';
import PT from 'prop-types';

class Start extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  render() {
    return (
      <div>
        <p>Choose your language: Spanish</p>
        <span>Enter your twitter handle:</span>
        <input placeholder="@handle" onChange={this.handleChange}></input>
        <button onClick={this.handleSubmit}><Link to='/GamePage'>START</Link></button>
      </div>
    );
  }
  handleChange(e) {
    e.preventDefault();
    this.setState({
      input: e.target.value
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    console.log('handle submit', this.state.input);
    saveUsername(this.state.input);
  }
}

Start.propTypes = {
  saveUsername: PT.func.isRequired
};

  
const mapDispatchToProps = dispatch => ({
  saveUsername: (U) => {
    console.log('username', U);
    dispatch(saveUsername(U));
  }
});

export default connect(mapDispatchToProps)(Start);