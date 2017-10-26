import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Homepage from './Homepage';
import GamePage from './GamePage/GamePage';
import UserPage from './UserPage/UserPage';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div id="App">
          <h1>TWEET-A-LANG</h1>
          <Switch>
            <Route exact path='/' component={Homepage} />
            <Route exact path='/tweets/:username' component={GamePage} />
            <Route exact path='/user/:username' component={UserPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;