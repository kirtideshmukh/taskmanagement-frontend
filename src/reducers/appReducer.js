/** @format */

import appActions from "actions/appActions";

// import { saveLocalStorageState } from "helpers/localstorageHelper";

export const initialState = {
  isLoading: false, // Shows on default page
  auth_token: "",
  gotAccessControls: false, //To check whether the api is already called or not
  redirectToLogin: false,
  userId: 2,
  loggedInUser: {
    id: "",
    role: "",
    auth_token: ""
  }
};

// export const storeUserDetailsInLocalStorage = userDetails => {
//   return saveLocalStorageState({
//     loggedInUser: userDetails
//   });
// };

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case appActions.resetToInitialState:
      return initialState;
    default:
      return state;
  }
};

export default appReducer;
