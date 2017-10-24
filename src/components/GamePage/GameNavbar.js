import React from 'react';
import { Link } from 'react-router-dom';
import ScoreTally from './ScoreTally';

class GameNavbar extends React.Component {
    render() {
        return (
            <div>
                <nav>
                    <button><Link to='/'>Quit</Link></button>
                    {(this.props.end) ? <button disabled>No more skips!</button> :
                        <button onClick={this.props.onClick}>Skip</button>}
                    <ScoreTally />
                </nav>
            </div>
        )
    }
}

export default GameNavbar;