import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { PersistGate } from 'redux-persist/es/integration/react';
import 'bulma/css/bulma.css';

import configureStore from './store';


import GamePage from './containers/GamePage/GamePage';
import UserPage from './components/UserPage/UserPage';
import Leaderboard from './components/Homepage/Leaderboard';
import NoMatch from './components/Errors/NoMatch';
import App from './components/App';

const { persistor, store } = configureStore();

ReactDOM.render(
  <Provider store={store} >
    <PersistGate
      persistor={persistor}>
      <Router>
        <Switch>
          <Route exact path='/' component={App} />
          <Route exact path='/tweets/:username' component={GamePage} />
          <Route exact path='/user/:username' component={UserPage} />
          <Route exact path='/scoreboard' component={Leaderboard} />
          <Route path='/*' component={NoMatch} />
        </Switch>
      </Router>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);

