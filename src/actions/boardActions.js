/** @format */

const boardActions = {
  boardListFetchInitiated: "BOARD_LIST_FETCH_INITIATED",
  boardListFetchingSucceeded: "BOARD_LIST_FETCHING_SUCCEEDED",
  boardListFetchingFailed: "BOARD_LIST_FETCHING_FAILED",
  boardCreationInitiated: "BOARD_CREATION_INITIATED",
  boardCreationSucceeded: "BOARD_CREATION_SUCCEEDED",
  boardCreationFailed: "BOARD_CREATION_FAILED",
  boardUpdationInitiated: "BOARD_UPDATION__INITIATED",
  boardUpdationSucceeded: "BOARD_UPDATION_SUCCEEDED",
  boardUpdationFailed: "BOARD_UPDATION_FAILED",
  boardDeletionInitiated: " BOARD_DELETION_INITIATED",
  boardDeletionSucceeded: "BOARD_DELETION_SUCCEEDED",
  boardDeletionFailed: "BOARD_DELETION_FAILED",
  resetToInitialState: "RESET_BOARD_REDUCER_TO_INITAIL_STATE",
  toggleModalState: "TOGGLE_MODAL_STATE"
};

export const toggleModalState = modalState => ({
  type: boardActions.toggleModalState,
  payload: { modalState, serverErrors: [] }
});

export const resetToInitialState = () => ({
  type: boardActions.resetToInitialState,
  payload: {}
});

export const fetchBoardList = (params) => ({
  type: boardActions.boardListFetchInitiated,
  payload: {
    params
  }
});

export const fetchingBoardListSucceeded = (boardList) => ({
  type: boardActions.boardListFetchingSucceeded,
  payload: {
    boardList,
    isLoading: false
  }
});

export const fetchingBoardListFailed = () => ({
  type: boardActions.boardListFetchingFailed,
  payload: {
    isLoading: false
  }
});

export const createBoard = params => ({
  type: boardActions.boardCreationInitiated,
  payload: {
    params
  }
});

export const boardCreationSucceeded = () => ({
  type: boardActions.boardCreationSucceeded,
  payload: {
    isSubmitting: false,
    modalState: false
  }
});

export const boardCreationFailed = serverErrors => ({
  type: boardActions.boardCreationFailed,
  payload: {
    isSubmitting: false,
    serverErrors
  }
});

export const deleteBoard = params => ({
  type: boardActions.boardDeletionInitiated,
  payload: {
    params
  }
})

export const updateBoard = params => ({
  type: boardActions.boardUpdationInitiated,
  payload: {
    params
  }
});

export const boardUpdationSucceeded = () => ({
  type: boardActions.boardUpdationSucceeded,
  payload: {
    isSubmitting: false,
    modalState: false
  }
});

export const boardUpdationFailed = serverErrors => ({
  type: boardActions.boardUpdationFailed,
  payload: {
    isSubmitting: false,
    serverErrors
  }
});

export default boardActions;
