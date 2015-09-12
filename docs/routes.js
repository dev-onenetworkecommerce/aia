import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import { createHashHistory } from 'history';

export default (
  <Router history={createHashHistory()}>
    <Route path="/" component={require('./App')}>
      <IndexRoute component={require('./sections/.Home')} />
      <Route path="scaffolding" component={require('./sections/Scaffolding')} />
      <Route path="layout" component={require('./sections/Layout')} />
      <Route path="type" component={require('./sections/Type')} />
    </Route>
  </Router>
);
