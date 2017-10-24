import React from 'react';

class ScoreTally extends React.Component {
    render() {
        return (
            <div>
                <span>Score: {this.props.score}</span>
            </div>
        )
    }
}

export default ScoreTally;