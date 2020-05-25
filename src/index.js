import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";

import './index.css';
import App from './App';
import store from "store";
import history from "history.js";

ReactDOM.render(
  <Provider store={store}>
      <Router history={history}>
        <Switch>
          <Route path="/" component={App} />
        </Switch>
      </Router>
  </Provider>,
  document.getElementById("root")
);
