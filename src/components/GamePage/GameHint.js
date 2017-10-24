import React from 'react';


class GameHint extends React.Component {
    render() {
        return (
            <div>
                <button onClick={this.props.onShowHint}>Show Hint</button>
         </div>
        )
    }
}

export default GameHint;