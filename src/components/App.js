import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Homepage from './Homepage';
import GamePage from './GamePage/GamePage';

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Switch>
                        <Route exact path='/' component={Homepage} />
                        <Route exact path='/GamePage' component={GamePage} />
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}

export default App;