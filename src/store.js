import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import rootReducer from "reducers/rootReducer";
// import { initialState } from "reducers/appReducer";
import rootSaga from "sagas/rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  {
    // appReducer: {
    //   ...initialState
    // }
  },
  applyMiddleware(sagaMiddleware)
);

export const getAppReducer = () => store.getState().appReducer;

sagaMiddleware.run(rootSaga);

export default store;
