import React from 'react';
import GameHint from './GameHint';


class GameCard extends React.Component {
    render() {
        return (
            <div>
                <p>Olie</p>
                <span>Image here</span>

                <p>Un ejemplo en espagnol</p>
                <ol>
                    <li>example</li>
                    <li>test</li>
                    <li>cheese</li>
                </ol>
                <GameHint />

         </div>
        )
    }
}

export default GameCard;