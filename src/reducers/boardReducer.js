/** @format */

import boardActions from "actions/boardActions";

export const initialState = {
  isLoading: false,
  isSubmitting: false,
  errorsMapping: {
    requiredBrandName: "Please enter board name."
  },
  serverErrors: [],
  total_count: 0,
  modalState: false,
  totalBoards: [],
  filteredBoards: [],
  boardList: []
};

const boardReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case boardActions.boardFetchInitiated:
      return { ...state, isLoading: true };
    case boardActions.boardCreationInitiated:
    case boardActions.boardUpdationInitiated:
      return { ...state, isSubmitting: true };
    case boardActions.boardFetchingFailed:
    case boardActions.boardCreationSucceeded:
    case boardActions.boardCreationFailed:
    case boardActions.boardUpdationSucceeded:
    case boardActions.boardUpdationFailed:
    case boardActions.toggleModalState:
      return { ...state, ...action.payload };
    case boardActions.boardFetchingSucceeded: {
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
