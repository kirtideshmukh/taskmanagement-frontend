/** @format */

import boardActions from "actions/boardActions";

export const initialState = {
  isLoading: false,
  boardDetails: {}
};

export const getStatusWiseTasks  = (boardDetails = {}) => {
  const { task_status, tasks } = boardDetails;
  return task_status.map(status => {
    const { name: key } = status,
    value = tasks.filter(task => task.status === status.name)
    return {
      [key]: value
    }
  })
}

const boardDetailsReducer = (state = initialState, action = {}) => {
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
        boardDetails,
        taskList: getStatusWiseTasks(boardDetails)
      };
    }
    case boardActions.resetDetailsReducerToInitialState:
      return initialState;
    default:
      return state;
  }
};

export default boardDetailsReducer;
