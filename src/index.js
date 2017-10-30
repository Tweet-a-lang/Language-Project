import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import store from './store';

import GamePage from './components/GamePage/GamePage';
import UserPage from './components/UserPage/UserPage';
import Leaderboard from './components/Homepage/Leaderboard';
import NoUser from './components/Errors/NoUser';
import App from './components/App';


ReactDOM.render(
  <Provider store={store} >

    <Router>
      <Switch>
        <Route exact path='/' component={App} />
        <Route exact path='/tweets/:username' component={GamePage} />
        <Route exact path='/user/:username' component={UserPage} />
        <Route exact path='/scoreboard' component={Leaderboard} />
        <Route path='/*' component={NoUser} />
      </Switch>
    </Router>

  </Provider>,
  document.getElementById('root')
); 

