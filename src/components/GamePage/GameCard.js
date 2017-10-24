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

                {this.props.data.map((tweet) => {
                    return <div>
                        <h3>Your tweets from: @{tweet.user.screen_name}</h3>

                        <p>{tweet.text.split(' ').map((word) => {
                            if (word === wordSelection) return word.toUpperCase()
                            return word;
                        }).join(' ')}</p>

                        {this.props.multipleChoice.map((choice) => {
                            return <button onClick={(choice.result)?this.props.onTrueClick : this.props.onFalseClick}>{choice.text}</button>
                        })}
                        <GameHint 
                        onShowHint={this.props.onShowHint}/>
                    </div>
                })}
            
            </div>
        )
    }

}

export default GameCard;