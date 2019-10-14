import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from 'containers/header';
import Home from 'components/home';

export default function routes() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route component={Home} />
      </Switch>
    </BrowserRouter>
  );
}
