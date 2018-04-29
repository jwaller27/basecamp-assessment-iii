import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <First />
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Second />
        <Third />
      </div>
    );
  }
}

class First extends Component {
  render() {
    return (
      <h1>This is my first Component</h1>
    )
  }
}

class Second extends Component {
  render() {
    return (
      <p>This is my second</p>
    )
  }
}

class Third extends Component {
  render() {
    return (
      <p>
        <img src="https://cdn.shopify.com/s/files/1/1061/1924/products/Thumbs_Up_Hand_Sign_Emoji_grande.png?v=1480481047" alt="thumbs up"/>
      </p>
    )
  }
}

export default App;
