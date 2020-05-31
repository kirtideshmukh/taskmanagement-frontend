import { all } from "redux-saga/effects";

// import { fetchMyBiddingAmountSaga } from "./fetchMyBiddingAmountSaga";
import { createBoardSaga } from "./createBoardSaga";
import { getBoardListSaga } from "./fetchBoardsSaga";
import { deleteBoardSaga } from "./deleteBoardSaga";
import { fetchBoardDetailsSaga } from "./fetchBoardDetailsSaga";

const allSagas = [
  // fetchMyBiddingAmountSaga()
  createBoardSaga(),
  getBoardListSaga(),
  deleteBoardSaga(),
  fetchBoardDetailsSaga()
];

export default function* rootSaga() {
  yield all(allSagas);
}
