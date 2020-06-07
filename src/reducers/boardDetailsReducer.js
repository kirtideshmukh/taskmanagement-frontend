/** @format */

import boardActions from "actions/boardActions";

export const initialState = {
  isLoading: false,
  boardDetails: {},
  taskStatus: [],
  labels: [],
  priorities: [],
  statusList: [],
  taskList: []
};

export const getStatusWiseTasks  = (tasks = [], taskStatus = []) => {
  let value = [];
  return taskStatus.map(status => { 
    value = tasks.filter(task => task.status === status)
    return {
      [status]: value  || []
    }
  })
}

export const getKeyValuePairs = (arr = []) => arr.map(ele =>{ return  {label: ele, value: ele} })

const boardDetailsReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case boardActions.boardDetailsFetchInitiated:
      return { ...state, isLoading: true };
    case boardActions.boardDetailsFetchingFailed:
    case boardActions.fetchLabels:
    case boardActions.fetchPriorites:
    case boardActions.fetchStatusList:
    case boardActions.fetchingLabelsSucceeded:
      return {
        ...state,
        labels: action.payload.data
      }
    case boardActions.fetchingPrioritiesSucceeded:
      return {
        ...state,
        priorities: action.payload.data
      }
    case boardActions.fetchingStatusListSucceeded:
      return {
        ...state,
        statusList: action.payload.data
      }
    case boardActions.searchInitiated:
      return { ...state, ...action.payload };
    case boardActions.searchSucceeded:{
      const { taskList} = action.payload || {};
      return {
        ...state,
        taskList: getStatusWiseTasks(taskList, state.taskStatus)
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
