/** @format */

import { takeLatest, put } from "redux-saga/effects";

import taskActions, {
  taskDeletionSucceeded,
  taskDeletionFailed
} from "actions/taskActions";

import { archiveTaskApi } from "apis/taskApis";
import { fetchBoardDetails } from "actions/boardActions";

import { successNotification, dangerNotification } from "notificationStore";
import { toggleDeleteModalState } from "../actions/taskActions";

export function* deleteTask(action) {
  const { payload: { params } = {} } = action;

  try {
    const { message } = yield archiveTaskApi(params);
    yield put(taskDeletionSucceeded());
    yield successNotification(message);
    yield put(toggleDeleteModalState({isOpen: false, taskId: null}))
    yield put(fetchBoardDetails({board_id: params.board_id}))
    
  } catch (errorResponse) {
    const { errors, message } = errorResponse;
    yield dangerNotification(message)
    
    yield put(taskDeletionFailed(errors));
  }
}

export function* deleteTaskSaga() {
  yield takeLatest(taskActions.taskDeletionInitiated, deleteTask);
}
