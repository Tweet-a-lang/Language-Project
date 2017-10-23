import React from 'react';
import { Link } from 'react-router-dom';

class Start extends React.Component {
    render() {
        return (
            <div>
                <p>Choose your language: Spanish</p>
                <span>Enter your twitter handle:</span>
                <input placeholder="@handle"></input>
                <button><Link to='/GamePage'>START</Link></button>
            </div>
        )
    }
}

export default Start;