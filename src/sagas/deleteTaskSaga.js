/** @format */

import { takeLatest, put } from "redux-saga/effects";

import taskActions, {
  taskDeletionSucceeded,
  taskDeletionFailed
} from "actions/taskActions";

import { archiveTaskApi } from "apis/taskApis";
import { fetchBoardDetails } from "./fetchBoardDetailsSaga";

import { successNotification, dangerNotification } from "notificationStore";

export function* deleteTask(action) {
  const { payload: { params } = {} } = action;

  try {
    const { message } = yield archiveTaskApi(params);
    yield put(taskDeletionSucceeded());
    yield successNotification(message);
    yield put(fetchBoardDetails({board_id: params.board_id}))
    
  } catch (errorResponse) {
    const { errors, message } = errorResponse;
    yield dangerNotification(message)
    
    yield put(taskDeletionFailed(errors));
  }
}

export function* updateTaskSaga() {
  yield takeLatest(taskActions.taskDeletionInitiated, deleteTask);
}
