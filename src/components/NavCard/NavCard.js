import React from 'react';
import Start from './Start';
import Leaderboard from './Leaderboard';
import HowToPlay from './HowToPlay';

class NavCard extends React.Component {
    render() {
        return (
            <div>
                <h1>TWEET-A-LANG</h1>
                <Start />

               <Leaderboard />


                <HowToPlay />
         </div>
        )
    }
}

export default NavCard;