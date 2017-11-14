import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import './index.css';
import store from './store'
import Pokedex from './components/Pokedex.js';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Provider store={store}>
    <Pokedex />
  </Provider>, document.getElementById('root'));
registerServiceWorker();
