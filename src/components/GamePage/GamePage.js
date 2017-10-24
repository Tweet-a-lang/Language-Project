import React from 'react';
import GameNavbar from './GameNavbar';
import Data from '../../../public/data/muyinteresante.json';
import CorrectPopUp from './Results/CorrectPopUp';
import InCorrectPopUp from './Results/InCorrectPopUp';
import GameCard from './GameCard'

class GamePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: Data,
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
            ],
            count: 0,
            end: false
        }
        this.increaseCount = this.increaseCount.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    render() {
        return (
            <div>
                <GameNavbar
                    end={this.state.end}
                    count={this.state.count}
                    onClick={this.handleClick}
                />
                <GameCard
                    data={this.state.data}
                    multipleChoice={this.state.multipleChoice}
                    count={this.state.count}
                    onClick={this.handleClick} />
            </div>
        )
    }
    handleClick(e) {
        e.preventDefault();
        this.increaseCount()
    }
    increaseCount() {
        if (this.state.count === this.state.data.length - 2) {
            this.setState({
                count: 0,
                end: true
            })
        } else {
            this.setState({
                count: this.state.count + 1,
                end: false
            })
        }
    }
}

export default GamePage;