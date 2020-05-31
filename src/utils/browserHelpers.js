/** @format */

// import { removeLocalStorageState } from "helpers/localstorageHelper";
import { getAppReducer } from "store";
import {
  ROUTES
} from "appConstants";

export const openLink = (url, target = "_self") =>
  url && window.open(url, target);

export const redirectTo = url => {
  if (url) {
    // removeLocalStorageState();
    openLink(url);
  }
};

export const getPathName = () => window.location.pathname;

export const isLoginPath = () => getPathName() === ROUTES.login;

export const getAuthToken = () => {
  return getAppReducer().loggedInUser.auth_token || "";
};

export const constructNestedRoutes = (path1, id1, path2, id2 = null) => {
  let reqPath = `${path1}/${id1}/${path2}`;

  return id2 ? `${reqPath}/${id2}` : reqPath;
};
