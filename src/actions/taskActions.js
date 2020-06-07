/** @format */

const taskActions = {
  taskDetailsFetchInitiated: "TASK_DETAILS_FETCH_INITIATED",
  taskDetailsFetchingSucceeded: "TASK_DETAILS_FETCHING_SUCCEEDED",
  taskDetailsFetchingFailed: "TASK_DETAILS_FETCHING_FAILED",
  taskCreationInitiated: "TASK_CREATION_INITIATED",
  taskCreationSucceeded: "TASK_CREATION_SUCCEEDED",
  taskCreationFailed: "TASK_CREATION_FAILED",
  taskDetailsUpdationInitiated: "TASK_UPDATION__INITIATED",
  taskDetailsUpdationSucceeded: "TASK_UPDATION_SUCCEEDED",
  taskDetailsUpdationFailed: "TASK_UPDATION_FAILED",
  taskDeletionInitiated: "TASK_DELETION_INITIATED",
  taskDeletionSucceeded: "TASK_DELETION_SUCCEEDED",
  taskDeletionFailed: "TASK_DELETION_FAILED",
  resetTaskReducerToInitialState: "RESET_TASK_DETAILS_REDUCER_TO_INITAIL_STATE",
  toggleModalState: "TOGGLE_TASK_MODAL_STATE",
  toggleDeleteModalState: "TOGGLE_DELETE_MODAL"
};

export const toggleDeleteModalState = deleteTaskModalState => ({
  type: taskActions.toggleDeleteModalState,
  payload: { deleteTaskModalState, serverErrors: [] }
})

export const toggleModalState = modalState => ({
  type: taskActions.toggleModalState,
  payload: { modalState, serverErrors: [] }
});

export const resetTaskReducerToInitialState = () => ({
  type: taskActions.resetTaskReducerToInitialState,
  payload: {}
})

export const createTask = params => ({
  type: taskActions.taskCreationInitiated,
  payload: {
    params
  }
});

export const taskCreationSucceeded = () => ({
  type: taskActions.taskCreationSucceeded,
  payload: {
    isSubmitting: false,
    modalState: false
  }
});

export const taskCreationFailed = serverErrors => ({
  type: taskActions.taskCreationFailed,
  payload: {
    isSubmitting: false,
    serverErrors
  }
});

export const deleteTask = params => ({
  type: taskActions.taskDeletionInitiated,
  payload: {
    params
  }
})

export const taskDeletionSucceeded = () => ({
  type: taskActions.taskDeletionSucceeded,
  payload: {
    isSubmitting: false,
    modalState: false
  }
});

export const taskDeletionFailed = serverErrors => ({
  type: taskActions.taskDeletionFailed,
  payload: {
    isSubmitting: false,
    serverErrors
  }
});

export const updateTask = params => ({
  type: taskActions.taskDetailsUpdationInitiated,
  payload: {
    params
  }
});

export const taskUpdationSucceeded = () => ({
  type: taskActions.taskDetailsUpdationSucceeded,
  payload: {
    isSubmitting: false,
    modalState: false
  }
});

export const taskUpdationFailed = serverErrors => ({
  type: taskActions.taskDetailsUpdationFailed,
  payload: {
    isSubmitting: false,
    serverErrors
  }
});

export const fetchTaskDetails = params => ({
  type: taskActions.taskDetailsFetchInitiated,
  payload: {
    params
  }
});

export const taskDetailsFetchingSucceeded = (taskDetails) => ({
  type: taskActions.taskDetailsFetchingSucceeded,
  payload: {
    taskDetails
  }
});

export const taskDetailsFetchingFailed = serverErrors => ({
  type: taskActions.taskDetailsFetchingFailed,
  payload: {
    isSubmitting: false,
    serverErrors
  }
});

export default taskActions;
