/** @format */

import { takeLatest, put } from "redux-saga/effects";

import boardActions, {
  labelsFetchingSucceeded,
} from "actions/boardActions";

import { getLabelsApi } from "apis/boardApis";
import { dangerNotification } from "notificationStore";

export function* fetchLabels(action = {}) {
  try {
    const { payload: {params = {}}  ={}} = action;
    const response = yield getLabelsApi(params),
      { data } = response || {};
    yield put(labelsFetchingSucceeded(data));
  } catch (error) {
    yield dangerNotification("Failed to fetch labels");
  }
}

export function* fetchLabelsSaga() {
  yield takeLatest(boardActions.fetchLabels, fetchLabels);
}
