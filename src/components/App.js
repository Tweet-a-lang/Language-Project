import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Homepage from './Homepage';
import GamePage from './GamePage/GamePage';
import CorrectPopUp from './GamePage/Results/CorrectPopUp';
import InCorrectPopUp from './GamePage/Results/InCorrectPopUp';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div id="App">
          <h1>TWEET-A-LANG</h1>
          <Switch>
            <Route exact path='/' component={Homepage} />
            <Route exact path='/GamePage' component={GamePage} />
            <Route exact path='/correct' component={CorrectPopUp} />
            <Route exact path='/incorrect' component={InCorrectPopUp} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;