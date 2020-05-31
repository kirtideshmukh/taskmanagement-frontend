/** @format */

import boardActions from "actions/boardActions";

export const initialState = {
  isLoading: false,
  isSubmitting: false,
  serverErrors: [],
  total_count: 0,
  modalState: false,
  totalBoards: [],
  filteredBoards: [],
  boardList: [],
  boardModalState: {
    isOpen: false
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
    case boardActions.boardCreationFailed:
    case boardActions.boardUpdationSucceeded:
    case boardActions.boardUpdationFailed:
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
    case boardActions.boardCreationSucceeded: {
      return { ...state, ...action.payload, boardModalState: initialState.boardModalState}
    }
    case boardActions.updateFilteredBoards: {
      const { payload } = action,
        { filteredBrands } = payload;
      return {
        ...state,
        filteredBrands
      };
    }
    case boardActions.resetToInitialState:
      return initialState;
    default:
      return state;
  }
};

export default boardReducer;
