import React from "react";
import { Router, Switch } from "react-router-dom";
import PropTypes from "prop-types";

import RouteWithSubRoutes from "utils/routesWithSubRoutes";

// import RouteHelperHoC from "HoCs/routeHelperHoC";

// import { ROUTES } from "appConstants";

export const routes = [
  // {
  //   path: ROUTES.dashboard,
  //   component: DashboardContainer,
  //   key: "dashboard",
  //   exact: true
  // },
  // {
  //   path: ROUTES.login,
  //   component: LoginLayout,
  //   key: "login"
  // },
  // {
  //   path: ROUTES.signUp,
  //   component: SignUpComponent,
  //   key: "sign-up",
  //   exact: true
  // },
  // {
  //   path: ROUTES.setPassword,
  //   component: SetPasswordComponent,
  //   key: "set-password",
  //   exact: true
  // },
  // {
  //   path: `${ROUTES.liveBidDetails}/:biddingId${ROUTES.cars}/:carId`,
  //   component: LiveBidBidderDetails,
  //   key: "livebid-bid-details",
  //   exact: true
  // },
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
