/** @format */

import { takeLatest, put } from "redux-saga/effects";

// import getFormErrors from "helpers/serverErrorsHelper";

import boardActions, {
  boardDeletionSucceeded,
  boardDeletionFailed,
  fetchBoardList
} from "actions/boardActions";

import { deleteBoardApi } from "apis/boardApis";

import { successNotification, dangerNotification } from "notificationStore";

export function* deleteBoard(action) {
  const { payload: { params } = {} } = action;

  try {
    yield deleteBoardApi(params);
    yield put(boardDeletionSucceeded());
    yield put(fetchBoardList());
    yield put(successNotification("Board deleted successfully!"));
  } catch (errorResponse) {
    console.log({errorResponse});
    const { errors, message } = errorResponse;
    // const errorsShown = getFormErrors(errors, message);
    yield dangerNotification(message)
    
    yield put(boardDeletionFailed(errors));
  }
}

export function* deleteBoardSaga() {
  yield takeLatest(boardActions.boardDeletionInitiated, deleteBoard);
}
