/** @format */

import { takeLatest, put } from "redux-saga/effects";

// import getFormErrors from "helpers/serverErrorsHelper";

import boardActions, {
  boardCreationSucceeded,
  boardCreationFailed,
  fetchBoardList
} from "actions/boardActions";

import { createBoardApi } from "apis/boardApis";

import { successNotification, dangerNotification } from "notificationStore";

export function* createBoard(action) {
  const { payload: { params } = {} } = action;

  try {
    yield createBoardApi(params);
    yield put(boardCreationSucceeded());
    yield put(fetchBoardList());
    yield put(successNotification("Board created successfully!"));
  } catch (errorResponse) {
    const { errors, message } = errorResponse;
    // const errorsShown = getFormErrors(errors, message);
    yield dangerNotification(message)
    
    yield put(boardCreationFailed(errors));
  }
}

export function* createBoardSaga() {
  yield takeLatest(boardActions.boardCreationInitiated, createBoard);
}
