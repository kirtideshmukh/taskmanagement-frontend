import { takeLatest, put } from "redux-saga/effects";

import boardActions, {
  searchSucceeded,
  searchFailed
} from "actions/boardActions";

import { searchBoardApi } from "apis/boardApis";

import { successNotification, dangerNotification } from "notificationStore";

export function* searchBoard(action) {
  const { payload: { params } = {} } = action;

  try {
    const { data, message} = yield searchBoardApi(params);
    yield put(searchSucceeded(data));
    yield successNotification(message);
  } catch (errorResponse) {
    const { errors, message } = errorResponse;
    // const errorsShown = getFormErrors(errors, message);
    yield dangerNotification(message)
    
    yield put(searchFailed(errors));
  }
}

export function* searchBoardSaga() {
  yield takeLatest(boardActions.searchInitiated, searchBoard);
}
