import React from 'react';

class Start extends React.Component {
    render() {
        return (
                <div>
                    <p>Choose your language: Spanish</p>
                    <span>Enter your twitter handle:</span>
                    <input placeholder="@handle"></input>
                </div>
        )
    }
}

export default Start;