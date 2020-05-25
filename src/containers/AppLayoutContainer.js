/** @format */

import React from "react";
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import ReactNotification from "react-notifications-component";

import { routes } from "routes";

import { ROUTES } from "appConstants";
import RouteWithSubRoutes from "utils/routesWithSubRoutes";

const AppLayoutContainer = () => {
  return (
    <>
      AppLayoutContainer
      <ReactNotification />
      <Router>
        <Switch>
          <Redirect exact from={ROUTES.index} to={ROUTES.dashboard} />
          {routes.map(route => {
            return <RouteWithSubRoutes key={route.key} {...route} />;
          })}      
        </Switch>
      </Router>
    </>
  );
};

AppLayoutContainer.propTypes = {};

export default AppLayoutContainer;
