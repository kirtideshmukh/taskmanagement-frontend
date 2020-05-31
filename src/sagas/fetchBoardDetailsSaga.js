/** @format */

import { takeLatest, put } from "redux-saga/effects";

import boardActions, {
  boardDetailsFetchingSucceeded,
  boardDetailsFetchingFailed
} from "actions/boardActions";

import { getBoardDetailsApi } from "apis/boardApis";
import { dangerNotification } from "notificationStore";

export function* fetchBoardDetails(action = {}) {
  try {
    const { payload: {params = {}}  ={}} = action;
    const response = yield getBoardDetailsApi(params),
      { data } = response || {};
    yield put(boardDetailsFetchingSucceeded(data));
  } catch (error) {
    yield put(boardDetailsFetchingFailed());
    yield dangerNotification("Failed to fetch board list!");
  }
}

export function* fetchBoardDetailsSaga() {
  yield takeLatest(boardActions.boardDetailsFetchInitiated, fetchBoardDetails);
}
