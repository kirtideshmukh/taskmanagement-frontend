import { combineReducers } from "redux";
// import signUpReducer from "./signUpReducer";

import appReducer from "reducers/appReducer";
import boardReducer from "reducers/boardReducer";

const rootReducer = combineReducers({
  // signUpReducer
  appReducer,
  boardReducer
});

export default rootReducer;
