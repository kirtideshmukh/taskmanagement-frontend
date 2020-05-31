import { combineReducers } from "redux";
// import signUpReducer from "./signUpReducer";

import appReducer from "reducers/appReducer";
import boardListReducer from "reducers/boardListReducer";
import boardDetailsReducer from "reducers/boardDetailsReducer";

const rootReducer = combineReducers({
  // signUpReducer
  appReducer,
  boardListReducer,
  boardDetailsReducer
});

export default rootReducer;
