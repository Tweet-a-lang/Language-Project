import React from 'react';
import { Link } from 'react-router-dom';
import GameHint from './GameHint';
import Data from '../../../public/data/muyinteresante.json';
import CorrectPopUp from './Results/CorrectPopUp';
import InCorrectPopUp from './Results/InCorrectPopUp';

class GameCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            multipleChoice: [
                {
                    text: "Eliminate",
                    result: true
                },
                {
                    text: "Throw",
                    result: false
                },
                {
                    text: "Handbag",
                    result: false
                }
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

                    if (word === wordSelection) return word.toUpperCase()

                    return word;
                }).join(' ')}</p>

                <div>
                    {this.state.multipleChoice.map((choice) => {
                        return <button>{(choice.result) ? <Link to='/correct'>{choice.text}</Link> : <Link to='/incorrect'>{choice.text}</Link>}</button>
                    })}
                </div>


                <GameHint />

            </div>
        )
    }
}

export default GameCard;