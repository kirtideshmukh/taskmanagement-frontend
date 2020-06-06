/** @format */

import boardActions from "actions/boardActions";

export const initialState = {
  isLoading: false,
  boardDetails: {},
  taskStatus: [],
  labels: [],
  priorities: [],
  statusList: [],
  taskList: [],
  taskModalState: {
    isOpen: false,
    taskId: null
  },
  deleteTaskModalState: {
    isOpen: false,
    taskId: null
  }
};

export const getStatusWiseTasks  = (tasks = [], taskStatus = []) => {
  let value = [];
  return taskStatus.map(status => { 
    value = tasks.filter(task => task.status === status.name)
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
        labels: getKeyValuePairs(action.payload.data)
      }
    case boardActions.fetchingPrioritiesSucceeded:
      return {
        ...state,
        priorities: getKeyValuePairs(action.payload.data)
      }
    case boardActions.fetchingStatusListSucceeded:
      return {
        ...state,
        statusList: getKeyValuePairs(action.payload.data)
      }
    case boardActions.searchInitiated:
      return { ...state, ...action.payload };
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

      console.log({boardDetails});
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
