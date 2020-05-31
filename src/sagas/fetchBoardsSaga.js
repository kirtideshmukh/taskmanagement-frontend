/** @format */

import { takeLatest, put } from "redux-saga/effects";

import boardActions, {
  fetchingBoardListFailed,
  fetchingBoardListSucceeded
} from "actions/boardActions";

import { getBoardsApi } from "apis/boardApis";
import { dangerNotification } from "notificationStore";

export function* fetchBoardList(action = {}) {
  try {
    const { payload: {params = {} = {}}} = action;
    const response = yield getBoardsApi(params),
      { data } = response || {};
    yield put(fetchingBoardListSucceeded(data));
  } catch (error) {
    yield put(fetchingBoardListFailed());
    yield dangerNotification("Failed to fetch board list!");
  }
}

export function* getBoardListSaga() {
  yield takeLatest(boardActions.boardListFetchInitiated, fetchBoardList);
}
