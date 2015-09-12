import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import { createHashHistory } from 'history';

export default (
  <Router history={createHashHistory()}>
    <Route path="/" component={require('./App')}>
      <IndexRoute component={require('./sections/.Home')} />
      <Route path="about" component={require('./sections/.About')} />
      <Route component={require('./sections/Docs')}>
        <Route path="scaffolding" component={require('./sections/Docs-Scaffolding')} />
        <Route path="layout" component={require('./sections/Docs-Layout')} />
        <Route path="type" component={require('./sections/Docs-Type')} />
        <Route path="colors" component={require('./sections/Docs-Colors')} />
        <Route path="buttons" component={require('./sections/Docs-Buttons')} />
        <Route path="labels" component={require('./sections/Docs-Labels')} />
        <Route path="slate" component={require('./sections/Docs-Slate')} />
        <Route path="guidelines" component={require('./sections/Docs-Guidelines')} />
        <Route path="alerts" component={require('./sections/Docs-Alerts')} />
      </Route>
    </Route>
  </Router>
);
