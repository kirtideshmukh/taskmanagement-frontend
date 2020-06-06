/** @format */

import { takeLatest, put } from "redux-saga/effects";

import taskActions, {
  taskUpdationSucceeded,
  taskUpdationFailed
} from "actions/taskActions";

import { updateTaskApi } from "apis/boardApis";
import { fetchBoardDetails } from "./fetchBoardDetailsSaga";

import { successNotification, dangerNotification } from "notificationStore";

export function* updateTask(action) {
  const { payload: { params } = {} } = action;

  try {
    const { message } = yield updateTaskApi(params);
    yield put(taskUpdationSucceeded());
    yield successNotification(message);
    yield put(fetchBoardDetails({board_id: params.board_id}))
    
  } catch (errorResponse) {
    const { errors, message } = errorResponse;
    yield dangerNotification(message)
    
    yield put(taskUpdationFailed(errors));
  }
}

export function* updateTaskSaga() {
  yield takeLatest(taskActions.taskUpdationInitiated, updateTask);
}
