/** @format */

import boardActions from "actions/boardActions";

export const initialState = {
  isLoading: false,
  boardDetails: {},
  taskStatus: [],
  labels: [],
  priorities: [],
  statusList: []
};

export const getStatusWiseTasks  = (tasks = [], taskStatus = []) => {
  return taskStatus.map(status => {
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
    case boardActions.fetchLabels:
    case boardActions.fetchPriorites:
    case boardActions.fetchStatusList:
    case boardActions.fetchingLabelsSucceeded:
    case boardActions.fetchingPrioritiesSucceeded:
    case boardActions.fetchingStatusListSucceeded:
      return { ...state, ...action.payload };
    case boardActions.searchInitiated:
    case boardActions.searchSucceeded:{
      const { tasks} = action.payload || {};
      return {
        ...state,
        taskList: getStatusWiseTasks(tasks, state.taskStatus)
      }
    }
    case boardActions.boardDetailsFetchingSucceeded: {
      const { payload } = action,
        { boardDetails } = payload;

      return {
        ...state,
        isLoading: false,
        boardDetails,
        taskStatus: boardDetails.task_status || {},
        taskList: getStatusWiseTasks(boardDetails.tasks, boardDetails.task_status)
      };
    }
    case boardActions.resetDetailsReducerToInitialState:
      return initialState;
    default:
      return state;
  }
};

export default boardDetailsReducer;
