import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { saveUsername } from '../../actions/saveUsername';
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
        <form onSubmit={this.handleSubmit}>
          <input placeholder="@handle" onChange={this.handleChange}></input>
          <button type="submit" ><Link to={`/tweets/${this.state.input}`}>START GAME</Link></button>
        </form>
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
    if (this.state.input.length === 0) return;
    this.props.saveUsername(this.state.input);
  }
}

Start.propTypes = {
  saveUsername: PT.func.isRequired
};


const mapDispatchToProps = (dispatch) => {
  return {
    saveUsername: (U) => {
      dispatch(saveUsername(U));
    }
  };
};

export default connect(null, mapDispatchToProps)(Start);