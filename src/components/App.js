import React from 'react';
import Homepage from './Homepage/Homepage';


class App extends React.Component {
  render() {
    return (
      <div id="App">
        <h1>TWEET-A-LANG</h1>
        <Homepage />
      </div>
    );
  }
}

export default App;