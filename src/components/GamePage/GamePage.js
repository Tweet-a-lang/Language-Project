import React from 'react';
import GameNavbar from './GameNavbar';
import CorrectPopUp from './Results/CorrectPopUp';
import InCorrectPopUp from './Results/InCorrectPopUp';

class GamePage extends React.Component {
    render() {
        return (
            <div>
                <GameNavbar />
                <GameCard />
                <CorrectPopUp />
                <InCorrectPopUp />
         </div>
        )
    }
}

export default GamePage;