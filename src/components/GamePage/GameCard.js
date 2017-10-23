import React from 'react';
import GameHint from './GameHint';
import Data from '../../../public/data/muyinteresante.json';

class GameCard extends React.Component {
    render() {
        return (
            <div>
                <p>Player: Olie</p>
                <span>Player's Profile Image here</span>
{console.log(Data)}
                <h3>@{Data[80].user.screen_name}</h3>
                <p>{Data[80].text}</p>
                
                <ul>
                    <li>example</li>
                    <li>test</li>
                    <li>cheese</li>
                </ul>
                <GameHint />

            </div>
        )
    }
}

export default GameCard;