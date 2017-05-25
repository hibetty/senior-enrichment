'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import store from './store';
import Root from './components/Root';
import Home from './components/Home';
import AllCampusesContainer from './containers/AllCampusesContainer';
import SingleCampusContainer from './containers/SingleCampusContainer';
import AllStudentsContainer from './containers/AllStudentsContainer';
import SingleStudentContainer from './containers/SingleStudentContainer';
import testComponent from './components/testComponent';
import testComponent2 from './components/testComponent2';

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Root}>
        <IndexRoute component={Home} />
        <Route path="campuses" component={AllCampusesContainer} />
        <Route path="campus/:id" component={SingleCampusContainer} />
        <Route path="campus/add" component={testComponent} />
        <Route path="students" component={AllStudentsContainer} />
        <Route path="student/:id" component={SingleStudentContainer} />
        <Route path="students/add" component={testComponent} />

       {/* probably not necessary? vvv */}
        <Route path="*" component={testComponent2} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('main')
);
