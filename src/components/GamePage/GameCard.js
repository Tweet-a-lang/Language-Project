import React from 'react';
import GameHint from './GameHint';
import Data from '../../../public/data/muyinteresante.json';

class GameCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            multipleChoice: [
                                {text:"Eliminate",
                                result: true},
                                {text:"Throw",
                                result: false},
                                {text:"Handbag",
                                result: false}
            ]
        }
    }
    render() {
        let wordSelection = 'eliminar';
        return (
            <div>
                <p>Player: Olie</p>
                <span>Player's Profile Image here</span>

                <h3>@{Data[80].user.screen_name}</h3>
                <p>{Data[80].text.split(' ').map((word) => {
                    
                     if(word === wordSelection) return word.toUpperCase()
                       
                       return word;
                }).join(' ')}</p>
                
                <div>
                    {this.state.multipleChoice.map((choice) => {
                       return <button value={choice.result}>{choice.text}</button>
                    })}
                </div>

                <GameHint />

            </div>
        )
    }
}

export default GameCard;