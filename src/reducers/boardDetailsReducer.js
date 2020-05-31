/** @format */

import boardActions from "actions/boardActions";

export const initialState = {
  isLoading: false,
  boardDetails: {}
};

const boardDetailsReducer = (state = initialState, action = {}) => {
  console.log("=====", action)
  switch (action.type) {
    case boardActions.boardDetailsFetchInitiated:
      return { ...state, isLoading: true };
    case boardActions.boardDetailsFetchingFailed:
      return { ...state, ...action.payload };
    case boardActions.boardDetailsFetchingSucceeded: {
      const { payload } = action,
        { boardDetails } = payload;

      return {
        ...state,
        isLoading: false,
        boardDetails
      };
    }
    case boardActions.resetDetailsReducerToInitialState:
      return initialState;
    default:
      return state;
  }
};

export default boardDetailsReducer;
