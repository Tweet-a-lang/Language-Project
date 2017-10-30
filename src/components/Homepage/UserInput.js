import React from 'react';
import { Link } from 'react-router-dom';
import NewUser from '../UserPage/NewUser';
import PT from 'prop-types';

const UserInput = ({input, onChange, onLogin}) => (
  <div>
    <span>Enter your twitter handle:</span>
    <form>
      <input placeholder="@handle" onChange={onChange}></input>
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
