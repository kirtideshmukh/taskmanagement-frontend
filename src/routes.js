import React from "react";
import { Router, Switch } from "react-router-dom";
import PropTypes from "prop-types";

import RouteWithSubRoutes from "utils/routesWithSubRoutes";
import { ROUTES } from "appConstants";

import DashboardContainer from "containers/DashboardContainer";
import BoardDetailsContainer from "containers/BoardDetailsContainer";

import LoginForm from "./components/Login/LoginForm"
import SignUpForm from "./components/SignUp/SignUpForm"
// import RouteHelperHoC from "HoCs/routeHelperHoC";

export const routes = [
  {
    path: ROUTES.dashboard,
    component: DashboardContainer,
    key: "dashboard",
    exact: true
  },
  {
    path: ROUTES.login,
    component: LoginForm,
    key: "login"
  },
  {
    path: ROUTES.signUp,
    component: SignUpForm,
    key: "sign-up",
    exact: true
  },
  // {
  //   path: ROUTES.setPassword,
  //   component: SetPasswordComponent,
  //   key: "set-password",
  //   exact: true
  // },
  {
    path: `${ROUTES.boards}/:boardId`,
    component: BoardDetailsContainer,
    key: "board-details",
    exact: true
  }
  // ,
  // {
  //   path: `${ROUTES.carDetails}/:carId${ROUTES.bids}/:biddingId`,
  //   component: BidCarDetailsComponent,
  //   key: "car-details-for-a-bid",
  //   exact: true
  // }
];

const Routes = props => {
  const { routeList, routeDefinitions } = props,
    routesList = routeList || routeDefinitions;
  return (
    <Router>
      <Switch>
        {routesList.map(route => {
          return <RouteWithSubRoutes key={route.key} {...route} />;
        })}
      </Switch>
    </Router>
  );
};

Routes.propTypes = {
  routeList: PropTypes.array,
  routeDefinitions: PropTypes.array
};

Routes.defaultProps = {
  routeList: [],
  routeDefinitions: []
};

export default Routes;
