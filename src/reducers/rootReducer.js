import { combineReducers } from "redux";
// import signUpReducer from "./signUpReducer";

import appReducer from "reducers/appReducer";
import boardListReducer from "reducers/boardListReducer";
import boardDetailsReducer from "reducers/boardDetailsReducer";
import taskReducer from "reducers/taskReducer"

const rootReducer = combineReducers({
  // signUpReducer
  appReducer,
  boardListReducer,
  boardDetailsReducer,
  taskReducer
});

export default rootReducer;
