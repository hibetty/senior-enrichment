'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import store from './store';
import Root from './components/Root';
import testComponent from './components/testComponent';
import testComponent2 from './components/testComponent2';

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/">
        <IndexRoute component={testComponent} />
        <Route path="campus/:id" component={testComponent} />
        <Route path="students" component={testComponent} />
        <Route path="*" component={testComponent2} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('main')
);
