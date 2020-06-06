/** @format */

import { takeLatest, put } from "redux-saga/effects";

import taskActions, {
  taskCreationSucceeded,
  taskCreationFailed,
} from "actions/taskActions";

import { createTaskApi } from "apis/boardApis";
import { fetchBoardDetails } from "./fetchBoardDetailsSaga";

import { successNotification, dangerNotification } from "notificationStore";

export function* createTask(action) {
  const { payload: { params } = {} } = action;

  try {
    const { message } = yield createTaskApi(params);
    yield put(taskCreationSucceeded());
    yield successNotification(message);
    yield put(fetchBoardDetails({board_id: params.board_id}))
    
  } catch (errorResponse) {
    const { errors, message } = errorResponse;
    yield dangerNotification(message)
    
    yield put(taskCreationFailed(errors));
  }
}

export function* createTaskSaga() {
  yield takeLatest(taskActions.taskCreationInitiated, createTask);
}
