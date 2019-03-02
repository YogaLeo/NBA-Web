import React, { Component } from 'react';
import { TopBar } from '../components/TobBar';
import { Main } from '../components/Main';

class App extends Component {
  render() {
    console.log('render', this.state)
    return (
      <div className="App">
        <TopBar />
        <Main/>
      </div>
    );
  }
}

export default App;
