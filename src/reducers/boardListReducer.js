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
  boardModalState: {
    isOpen: false
  },
  deleteBoardModalState: {
    isOpen: false,
    boardId: null
  }
};

const boardReducer = (state = initialState, action = {}) => {
  console.log("=====", action)
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
        { brandList, total_count, isLoading } = payload;

      return {
        ...state,
        total_count,
        isLoading,
        totalBrands: brandList,
        filteredBrands: brandList
      };
    }
    case boardActions.boardCreationFailed:
    case boardActions.boardCreationSucceeded: {
      let boardModalState = initialState.boardModalState
      boardModalState.isOpen = false
      console.log("****", initialState.boardModalState)
      console.log({boardModalState})
      console.log("&&&&&&&&===========", { ...state, ...boardModalState})
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
