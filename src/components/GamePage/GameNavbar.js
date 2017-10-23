import React from 'react';
import ScoreTally from './ScoreTally';

class GameNavbar extends React.Component {
    render() {
        return (
            <div>
                <nav>
                <button>Quit</button>
                <button>Skip</button>
                <ScoreTally />
                </nav>
            </div>
        )
    }
}

export default GameNavbar;