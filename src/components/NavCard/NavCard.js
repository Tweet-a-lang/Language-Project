import React from 'react';
import Start from './Start';
import Leaderboard from './Leaderboard';
import HowToPlay from './HowToPlay';

class NavCard extends React.Component {
    render() {
        return (
            <div>
                <Start />
                <Leaderboard />
                <HowToPlay />
            </div>
        )
    }
}

export default NavCard;