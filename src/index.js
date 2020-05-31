import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import "react-notifications-component/dist/theme.css";
// import 'bootstrap/dist/css/bootstrap.css';

import "assets/scss/default.scss";

import './index.css';
import store from "store";
import history from "history.js";
import AppLayoutContainer from 'containers/AppLayoutContainer';

ReactDOM.render(
  <Provider store={store}>
      <Router history={history}>
        <Switch>
          <Route path="/" component={AppLayoutContainer} />
        </Switch>
      </Router>
  </Provider>,
  document.getElementById("root")
);
