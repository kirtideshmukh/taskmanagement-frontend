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
    const { data} = yield searchBoardApi(params);
    yield put(searchSucceeded(data));
    yield successNotification("search complete");
  } catch (errorResponse) {
    console.log({errorResponse})
    // const errorsShown = getFormErrors(errors, message);
    yield dangerNotification("error in searching")
    
    yield put(searchFailed());
  }
}

export function* searchBoardSaga() {
  yield takeLatest(boardActions.searchInitiated, searchBoard);
}
