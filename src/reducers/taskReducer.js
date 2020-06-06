/** @format */

import boardActions from "actions/boardActions";

export const initialState = {
  isLoading: false,
  isSubmitting: false,
  serverErrors: [],
  total_count: 0,
  totalBoards: [],
  filteredBoards: [],
  taskDetails: [],
  boardModalState: {
    isOpen: false
  },
  deleteBoardModalState: {
    isOpen: false,
    boardId: null
  }
};

const taskReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case boardActions.taskDetailsFetchInitiated:
      return { ...state, isLoading: true };
    case boardActions.taskCreationInitiated:
    case boardActions.taskUpdationInitiated:
      return { ...state, isSubmitting: true };
    case boardActions.taskDetailsFetchingFailed:
    case boardActions.taskUpdationSucceeded:
    case boardActions.taskUpdationFailed:
    case boardActions.taskDeletionInitiated:
    case boardActions.toggleModalState:
      return { ...state, ...action.payload };
    case boardActions.taskDetailsFetchingSucceeded: {
      const { payload } = action,
        { taskDetails, total_count, isLoading } = payload;

      return {
        ...state,
        total_count,
        isLoading,
        taskDetails
      };
    }
    case boardActions.taskCreationFailed:
    case boardActions.taskCreationSucceeded: {
      let boardModalState = initialState.boardModalState
      boardModalState.isOpen = false
      return { ...state, ...boardModalState}
    }
    case boardActions.taskDeletionSucceeded:
    case boardActions.taskDeletionFailed: {
      let deleteBoardModalState = initialState.deleteBoardModalState;
      deleteBoardModalState.isOpen = false;
      deleteBoardModalState.boardId =  null;
      return { ...state, ...action.payload, ...deleteBoardModalState}
    }
    case boardActions.updateFilteredBoards: {
      const { payload } = action,
        { filteredBrands } = payload;
      return {
        ...state,
        filteredBrands
      };
    }
    case boardActions.resetListReducerToInitialState:
      return initialState;
    default:
      return state;
  }
};

export default taskReducer;
