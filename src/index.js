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
import LoginForm from './components/Login/LoginForm';
import SignUpForm from "./components/SignUp/SignUpForm";
import { loadLocalStorageState } from './utils/localStorageHelpers';
import { routes } from "routes";

import {  ROUTES } from "appConstants";
import RouteWithSubRoutes from "utils/routesWithSubRoutes";

const authToken = loadLocalStorageState() ? loadLocalStorageState().authToken : ""

ReactDOM.render(
  <Provider store={store}>
      <Router history={history}>
        <Switch>
          <Route path={ROUTES.login} component={LoginForm} />
          <Route path={ROUTES.signUp} component={SignUpForm} />
          <Route path="/" component={ authToken ? AppLayoutContainer : LoginForm} />
          {routes.map(route => {
              return <RouteWithSubRoutes key={route.key} {...route} />;
            })} 
          
        </Switch>
      </Router>
  </Provider>,
  document.getElementById("root")
);
