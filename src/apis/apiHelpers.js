/** @format */

import {
  UNAUTHORIZED_CODE,
  HTTP_METHODS,
  PUBLIC_API_END_POINTS,
  ROUTES
} from "appConstants";
import { redirectTo, getPathName } from "utils/browserHelpers";
import { getAppReducer } from "store";
import { isEmptyObject } from "utils/isEmptyValue";

// eslint-disable-next-line no-undef
const apiHostUrl = process.env.REACT_APP_API_BASE_URL;

const getAuthorizationHeader = authToken => {
  return {
    Authorization: authToken
  };
};

/**Get request url as per bidwillz site */
const getRequestUrl = reqPath => {
  if (!apiHostUrl) {
    return `/${reqPath}`;
  }

  return `${apiHostUrl}/${reqPath}`;
};

/**These headers are required in every api-call */
const defaultHeaders = () => {
  return {
    "Content-Type": "application/json",
    Accept: "application/vnd.bidzwheelz; version=1"
  };
};

const getQueryString = params => {
  const queryString = [];
  for (let key in params) {
    queryString.push(`${key}=${params[key]}`);
  }
  return queryString.join("&");
};

const isApiRequiringAuthToken = (apiEnpoint = "") =>
  !PUBLIC_API_END_POINTS.some(nonTokenApiEndPoint => {
    return apiEnpoint.includes(nonTokenApiEndPoint);
  });

/**Check whether http method is GET or not */
const isGetApiCall = httpMethod => {
  return httpMethod === HTTP_METHODS.get;
};

/**Construct requestUrl based on it's http method */
const constructFetchUrl = (httpMethod, reqPath, queryString = "") => {
  return isGetApiCall(httpMethod)
    ? `${getRequestUrl(reqPath)}${queryString}`
    : getRequestUrl(reqPath);
};

/**Constructing options used in fetch call.
 * We send method and headers for GET call.
 * We need to send same options for PUT, POST, PATCH, DELETE methods: method, headers, body
 */
const constructFetchOptions = (httpMethod, headers, payload) => {
  let fetchOptions = { method: httpMethod, headers, cache: "reload" };
  if (!isGetApiCall(httpMethod)) {
    return {
      ...fetchOptions,
      body: JSON.stringify(payload)
    };
  }

  return fetchOptions;
};

export const getApi = (reqPath, payload, optionalHeaders = {}) => {
  return callApi(reqPath, payload, HTTP_METHODS.get, optionalHeaders);
};

export const putApi = (reqPath, payload, optionalHeaders = {}) => {
  return callApi(reqPath, payload, HTTP_METHODS.put, optionalHeaders);
};

export const postApi = (reqPath, payload, optionalHeaders = {}) => {
  return callApi(reqPath, payload, HTTP_METHODS.post, optionalHeaders);
};

export const patchApi = (reqPath, payload, optionalHeaders = {}) => {
  return callApi(reqPath, payload, HTTP_METHODS.patch, optionalHeaders);
};

export const deleteApi = (reqPath, payload, optionalHeaders = {}) => {
  return callApi(reqPath, payload, HTTP_METHODS.delete, optionalHeaders);
};

const callApi = async (reqPath, payload, httpMethod, optionalHeaders = {}) => {
  const queryString =
    isGetApiCall(httpMethod) && !isEmptyObject(payload)
      ? `?${getQueryString(payload)}`
      : "";

  const fetchUrl = constructFetchUrl(httpMethod, reqPath, queryString);
  let headers = { ...defaultHeaders(), ...optionalHeaders };

  /**If api requires auth_token, send it in authorization header. */
  if (isApiRequiringAuthToken(reqPath)) {
    const {
      loggedInUser: { auth_token }
    } = getAppReducer();
    headers = { ...headers, ...getAuthorizationHeader(auth_token) };
  }

  console.log("============", fetchUrl)

  const fetchOptions = constructFetchOptions(httpMethod, headers, payload),
    response = await fetch(fetchUrl, fetchOptions),
    parsedResponse = await response.json();

  if (response.ok) {
    return parsedResponse;
  }
  if (
    response &&
    response.status === UNAUTHORIZED_CODE &&
    getPathName() !== ROUTES.login
  ) {
    redirectTo(ROUTES.login);
    throw new Error();
  }

  /**For other responses, we will just treat response as error:
   * e.g. For 422 status code
   */
  throw parsedResponse;
};
