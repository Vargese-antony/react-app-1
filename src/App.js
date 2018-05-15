import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import Button from './Button'
import { Result } from './Result';

class App extends Component {
  
  state = { counter : 0 };

  incrementCounter = (incrementValue) => {
    this.setState((prevState) => ({
      counter: prevState.counter + incrementValue
    }));
  }

  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header> */}
          <Button 
            incrementValue={1} 
            onClickFunction={this.incrementCounter}>
          </Button>
          <Button 
            incrementValue={2} 
            onClickFunction={this.incrementCounter}>
          </Button>
          <Button 
            incrementValue={5} 
            onClickFunction={this.incrementCounter}>
          </Button>
          <Result counter={this.state.counter}></Result>
      </div>
    );
  }
}

export default App;
