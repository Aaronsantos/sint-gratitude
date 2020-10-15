import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './Home';
import QuoteInsert from './QuoteInsert';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route key="test" component={Home} path="/" exact />
        <Route key="test" component={QuoteInsert} path="/add" exact />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
