import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import TextPage from './Global/TextPage';
import NotFoundPage from './Global/NotFoundPage';
import GamePage from './Game/GamePage';

class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={TextPage}/>
          <Route path="/text/:text" component={TextPage}/>
          <Route path="/game" component={GamePage}/>
          <Route component={NotFoundPage}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Routes;
