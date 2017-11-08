import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/userInput.css';
import PT from 'prop-types';
import NewUser from '../UserPage/NewUser';

const UserInput = ({input, onChange, onLogin,onNewUser}) => (
  <div className='log-in'>
    <p>Enter your twitter handle:</p>
    <form >
      <input className='login input' placeholder="handle" onChange={onChange} value = {input} ></input>
      <Link to={(input.length > 0)? `/user/${input}` : '/'} onClick={onLogin}>
        <button className='button is-info is-inverted' type='submit'>Login</button>
      </Link>
      <Link to={(input.length > 0)? `/user/${input}` : '/'} onClick={onNewUser}>
        <NewUser />
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
