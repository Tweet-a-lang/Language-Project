import React from 'react';
import { Link } from 'react-router-dom';
import NewUser from '../UserPage/NewUser';
import PT from 'prop-types';

const UserInput = ({input, onChange, onLogin}) => (
  <div className='log-in'>
    <p>Enter your twitter handle:</p>
    <form >
      <input className='login input' placeholder="handle" onChange={onChange} value = {input} ></input>
      <Link to={(input.length > 0)? `/user/${input}` : '/'} onClick={onLogin}>
        <button>Login</button>
      </Link>
    </form>
    <NewUser />
  </div>
);

UserInput.propTypes = {
  input: PT.string.isRequired,
  onChange: PT.func.isRequired,
  onLogin: PT.func.isRequired
};

export default UserInput;
