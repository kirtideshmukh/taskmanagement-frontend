/** @format */

import React from "react";
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import ReactNotification from "react-notifications-component";
import { getAuthToken } from "store";

import { routes } from "routes";

import { ROUTES } from "../appConstants";
import RouteWithSubRoutes from "../utils/routesWithSubRoutes";
import NavigationBar from "../components/NavBar";

const AppLayoutContainer = () => {
  // console.log(getAuthToken());
  return (
    <>
      <ReactNotification />
      <NavigationBar />
      <div className="container-fluid">
        <Router>
          <Switch>
            <Redirect exact from={ROUTES.index} to={ROUTES.dashboard} />
            {routes.map(route => {
              return <RouteWithSubRoutes key={route.key} {...route} />;
            })}      
          </Switch>
        </Router>
      </div>
    </>
  );
};

AppLayoutContainer.propTypes = {};

export default AppLayoutContainer;
