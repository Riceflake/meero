import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from 'containers/header';
import Home from 'components/home';
import Trail from 'containers/trail';
import { PATH_TRAIL } from 'routes/paths';

export default function routes() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path={PATH_TRAIL} component={Trail} />
        <Route component={Home} />
      </Switch>
    </BrowserRouter>
  );
}
