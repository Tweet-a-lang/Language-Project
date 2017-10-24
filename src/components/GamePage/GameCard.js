import React from 'react';
import { Link } from 'react-router-dom';
import GameHint from './GameHint';
import CorrectPopUp from './Results/CorrectPopUp';
import InCorrectPopUp from './Results/InCorrectPopUp';

class GameCard extends React.Component {
    render() {
        let wordSelection = 'eliminar';
        console.log(this.props)
        return (
            <div>
                <p>Player: Olie</p>
                <span>Player's Profile Image here</span>

                <h3>@{this.props.data[this.props.count].user.screen_name}</h3>
                <p>{this.props.data[this.props.count].text.split(' ').map((word) => {
                    if (word === wordSelection) return word.toUpperCase()

                    return word;
                }).join(' ')}</p>

                <div>
                    {this.props.multipleChoice.map((choice) => {
                        return <button>{(choice.result) ? <Link to='/correct'>{choice.text}</Link> : <Link to='/incorrect'>{choice.text}</Link>}</button>
                    })}
                </div>

                <GameHint />

            </div>
        )
    }
}

export default GameCard;