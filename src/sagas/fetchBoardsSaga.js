/** @format */

import { takeLatest, put, takeEvery } from "redux-saga/effects";

import boardActions, {
  fetchingBoardListFailed,
  fetchingBoardListSucceeded
} from "actions/boardActions";

import { getBoardsApi } from "apis/boardApis";
import { dangerNotification } from "notificationStore";

export function* fetchBoardList(action = {}) {
  try {
    console.log("=%%%%%%%%%===========", action)
    const { payload: {params = {} = {}}} = action;
    const response = yield getBoardsApi(params),
      { data } = response || {};
    yield put(fetchingBoardListSucceeded(data));
  } catch (error) {
    console.log("CATCH BLOCK", error)
    yield put(fetchingBoardListFailed());
    yield dangerNotification("Failed to fetch board list!");
  }
}

export function* getBoardListSaga() {
  yield takeLatest(boardActions.boardListFetchInitiated, fetchBoardList);
}
