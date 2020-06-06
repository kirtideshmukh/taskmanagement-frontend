/** @format */

import { takeLatest, put } from "redux-saga/effects";

import taskActions, {
  taskDetailsFetchingSucceeded,
  taskDetailsFetchingFailed
} from "actions/taskActions";

import { getTaskDetailsApi } from "apis/boardApis";
import { dangerNotification } from "notificationStore";

export function* fetchTaskDetails(action = {}) {
  try {
    const { payload: {params = {}}  ={}} = action;
    const response = yield getTaskDetailsApi(params),
      { data } = response || {};
    yield put(taskDetailsFetchingSucceeded(data));
  } catch (error) {
    yield put(taskDetailsFetchingFailed());
    yield dangerNotification("Failed to fetch task details");
  }
}

export function* fetchTaskDetailsSaga() {
  yield takeLatest(taskActions.taskDetailsFetchInitiated, fetchTaskDetails);
}
