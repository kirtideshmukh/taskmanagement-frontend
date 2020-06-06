/** @format */

import { takeLatest, put } from "redux-saga/effects";

import boardActions, {
  statusListFetchingSucceeded,
} from "actions/boardActions";

import { getStatusListApi } from "apis/boardApis";
import { dangerNotification } from "notificationStore";

export function* fetchStatusList(action = {}) {
  try {
    const { payload: {params = {}}  ={}} = action;
    const response = yield getStatusListApi(params),
      { data } = response || {};
    yield put(statusListFetchingSucceeded(data));
  } catch (error) {
    yield dangerNotification("Failed to fetch status-list");
  }
}

export function* fetchStatusListSaga() {
  yield takeLatest(boardActions.fetchStatusList, fetchStatusList);
}
