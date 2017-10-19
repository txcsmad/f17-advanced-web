import React, { Component } from 'react';
import { Provider } from 'react-redux';

import store from './store';
import Routes from "./routes";
import TextPage from './Global/TextPage';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
            <TextPage text={"Hello"}/>
          </div>
          <Routes/>
        </div>
      </Provider>
    );
  }
}

export default App;
