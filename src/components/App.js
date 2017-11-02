import React from 'react';
import Homepage from './Homepage/Homepage';
import Footer from './Footer';


class App extends React.Component {
  render() {
    return (
      <div id="App">
        <Homepage />
        <Footer />
      </div>
    );
  }
}

export default App;