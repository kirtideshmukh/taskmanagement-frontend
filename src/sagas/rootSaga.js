import { all } from "redux-saga/effects";

// import { fetchMyBiddingAmountSaga } from "./fetchMyBiddingAmountSaga";
import { createBoardSaga } from "./createBoardSaga";
import { getBoardListSaga } from "./fetchBoardsSaga";
import { deleteBoardSaga } from "./deleteBoardSaga"

const allSagas = [
  // fetchMyBiddingAmountSaga()
  createBoardSaga(),
  getBoardListSaga(),
  deleteBoardSaga()
];

export default function* rootSaga() {
  yield all(allSagas);
}
