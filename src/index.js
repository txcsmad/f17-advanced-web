import React from 'react';
import { render } from 'react-dom';

import './index.css';
import App from './app/App';

render(<App />, document.getElementById('root'));

if (module.hot) {
  module.hot.accept('./app/App', () => {
    const NewApp = require('./app/App').default;
    render(<NewApp />, document.getElementById('root'));
  })
}
