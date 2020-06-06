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
  resetListReducerToInitialState: "RESET_BOARD_LIST_REDUCER_TO_INITAIL_STATE",
  resetDetailsReducerToInitialState: "RESET_BOARD_DETAILS_REDUCER_TO_INITIAL_STATE",
  toggleModalState: "TOGGLE_MODAL_STATE",
  boardDetailsFetchInitiated: "BOARD_FETCH_INITIATED",
  boardDetailsFetchingSucceeded: "BOARD_FETCHING_SUCCEEDED",
  boardDetailsFetchingFailed: "BOARD_FETCHING_FAILED",
  searchInitiated: "SERACH_INITIATED",
  searchSucceeded: "SEARCH_SUCCEEDED",
  searchFailed: "SEARCH_FAILED",
  fetchLabels: "FETCH_LABELS",
  fetchingLabelsSucceeded: "FETCHING_LABELS_SUCCEEDED",
  fetchPriorites: "FETCH_PRIORITIES",
  fetchingPrioritiesSucceeded: "FETCHING_PRIORITIES_SUCCEEDED",
  fetchStatusList: "FETCH_STATUS_LIST",
  fetchingStatusListSucceeded: "FETCHING_STATUS_LIST_SUCCEEDED"
};

export const fetchLabels = () => ({
  type: boardActions.fetchLabels,
  payload: {}
})

export const fetchPriorites = () => ({
  type: boardActions.fetchPriorites,
  payload: {}
})

export const fetchStatusList = () => ({
  type: boardActions.fetchStatusList,
  payload: {}
})

export const labelsFetchingSucceeded = () => ({
  type: boardActions.fetchingLabelsSucceeded,
  payload: {}
})

export const prioritiesFetchingSucceeded = () => ({
  type: boardActions.fetchingPrioritiesSucceeded,
  payload: {}
})

export const statusListFetchingSucceeded = () => ({
  type: boardActions.fetchingStatusListSucceeded,
  payload: {}
})

export const searchInitiated = (params={}) => ({
  type: boardActions.searchInitiated,
  payload: {params}
})

export const searchSucceeded = (taskList) => ({
  type: boardActions.searchSucceeded,
  payload: {taskList}
})

export const searchFailed = () => ({
  type: boardActions.searchFailed,
  payload: {}
})

export const toggleModalState = modalState => ({
  type: boardActions.toggleModalState,
  payload: { modalState, serverErrors: [] }
});

export const resetDetailsReducerToInitialState = () => ({
  type: boardActions.resetDetailsReducerToInitialState,
  payload: {}
});

export const resetListReducerToInitialState = () => ({
  type: boardActions.resetListReducerToInitialState,
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

export const boardDeletionSucceeded = () => ({
  type: boardActions.boardDeletionSucceeded,
  payload: {
    isSubmitting: false,
    modalState: false
  }
});

export const boardDeletionFailed = serverErrors => ({
  type: boardActions.boardDeletionFailed,
  payload: {
    isSubmitting: false,
    serverErrors
  }
});

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

export const fetchBoardDetails = params => ({
  type: boardActions.boardDetailsFetchInitiated,
  payload: {
    params
  }
});

export const boardDetailsFetchingSucceeded = (boardDetails) => ({
  type: boardActions.boardDetailsFetchingSucceeded,
  payload: {
    boardDetails
  }
});

export const boardDetailsFetchingFailed = serverErrors => ({
  type: boardActions.boardDetailsFetchingFailed,
  payload: {
    isSubmitting: false,
    serverErrors
  }
});

export default boardActions;
