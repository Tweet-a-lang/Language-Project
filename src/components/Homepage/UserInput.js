import React from 'react';
import { Link } from 'react-router-dom';
import PT from 'prop-types';

const UserInput = ({input, onChange, onLogin,onNewUser}) => (
  <div className='log-in'>
    <p>Enter your twitter handle:</p>
    <form >
      <input className='login input' placeholder="handle" onChange={onChange} value = {input} ></input>
      <Link to={(input.length > 0)? `/user/${input}` : '/'} onClick={onLogin}>
        <button>Login</button>
      </Link>
      <Link to={(input.length > 0)? `/user/${input}` : '/'} onClick={onNewUser}>
        <button>New User</button>
      </Link>
    </form>
  </div>
);

UserInput.propTypes = {
  input: PT.string.isRequired,
  onChange: PT.func.isRequired,
  onLogin: PT.func.isRequired,
  onNewUser: PT.func.isRequired,
  
};

export default UserInput;
