/** @format */

import boardActions from "actions/boardActions";

export const initialState = {
  isLoading: false,
  isSubmitting: false,
  serverErrors: [],
  total_count: 0,
  totalBoards: [],
  filteredBoards: [],
  boardList: [],
  
  
};

const boardReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case boardActions.boardListFetchInitiated:
      return { ...state, isLoading: true };
    case boardActions.boardCreationInitiated:
    case boardActions.boardUpdationInitiated:
      return { ...state, isSubmitting: true };
    case boardActions.boardListFetchingFailed:
    case boardActions.boardUpdationSucceeded:
    case boardActions.boardUpdationFailed:
    case boardActions.boardDeletionInitiated:
    case boardActions.toggleModalState:
      return { ...state, ...action.payload };
    case boardActions.boardListFetchingSucceeded: {
      const { payload } = action,
        { boardList, total_count, isLoading } = payload;

      return {
        ...state,
        total_count,
        isLoading,
        boardList
      };
    }
    case boardActions.boardCreationFailed:
    case boardActions.boardCreationSucceeded: {
      let boardModalState = initialState.boardModalState
      boardModalState.isOpen = false
      return { ...state, ...boardModalState}
    }
    case boardActions.boardDeletionSucceeded:
    case boardActions.boardDeletionFailed: {
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

export default boardReducer;
