import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import rootReducer from "reducers/rootReducer";
// import { initialState } from "reducers/appReducer";
import rootSaga from "sagas/rootSaga";

import { loadLocalStorageState } from "utils/localStorageHelpers"

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
);

export const getAppReducer = () => store.getState().appReducer;
console.log("=====", loadLocalStorageState())

export const getAuthToken = loadLocalStorageState() ? loadLocalStorageState().authToken : null

sagaMiddleware.run(rootSaga);

export default store;
