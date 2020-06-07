/** @format */

import taskActions from "actions/taskActions";

export const initialState = {
  isLoading: false,
  isSubmitting: false,
  serverErrors: [],
  total_count: 0,
  totalBoards: [],
  filteredBoards: [],
  taskDetails: {},
  taskModalState: {
    isOpen: false,
    taskId: null,
    lane: null,
    title: "",
    priority: "",
    desc: ""

  },
  deleteTaskModalState: {
    isOpen: false,
    taskId: null
  }
};

const taskReducer = (state = initialState, action = {}) => {
  console.log({action})
  switch (action.type) {
    case taskActions.taskDetailsFetchInitiated:
      return { ...state, isLoading: true };
    case taskActions.taskCreationInitiated:
    case taskActions.taskUpdationInitiated:
      return { ...state, isSubmitting: true };
    case taskActions.taskDetailsFetchingFailed:
    case taskActions.taskUpdationSucceeded:
    case taskActions.taskUpdationFailed:
    case taskActions.toggleModalState:
      {
        const { modalState } = action.payload || {};
        let taskModalState = action.payload.modalState;
      taskModalState.isOpen = modalState.isOpen;
      taskModalState.taskId =  modalState.taskId;
      taskModalState.title = modalState.title;
    taskModalState.priority = modalState.priority;
    taskModalState.desc = modalState.desc;
    taskModalState.title = modalState.title;
      taskModalState.lane = modalState.lane;
      taskModalState.labels = modalState.labels
      return { ...state,  ...taskModalState}
      }
      
    case taskActions.taskDetailsFetchingSucceeded: {
      const { payload } = action,
        { taskDetails, total_count, isLoading } = payload;

      return {
        ...state,
        total_count,
        isLoading,
        taskDetails
      };
    }
    case taskActions.taskCreationFailed:
    case taskActions.taskDeletionInitiated:
    case taskActions.taskCreationSucceeded: {
      // let boardModalState = initialState.boardModalState
      // boardModalState.isOpen = false
      return { ...state, ...action.payload}
    }
    case taskActions.taskDeletionSucceeded:
    case taskActions.taskDeletionFailed: {
      
      return { ...state, ...action.payload}
    }
    case taskActions.toggleDeleteModalState: {
      let deleteTaskModalState = action.payload.deleteTaskModalState;
      return { ...state, ...action.payload, ...deleteTaskModalState}
    }
    case taskActions.updateFilteredBoards: {
      const { payload } = action,
        { filteredBrands } = payload;
      return {
        ...state,
        filteredBrands
      };
    }
    case taskActions.resetListReducerToInitialState:
      return initialState;
    default:
      return state;
  }
};

export default taskReducer;
