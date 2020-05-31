import { all } from "redux-saga/effects";

// import { fetchMyBiddingAmountSaga } from "./fetchMyBiddingAmountSaga";
import { createBoardSaga } from "./createBoardSaga";
import { getBoardListSaga } from "./fetchBoardsSaga";

const allSagas = [
  // fetchMyBiddingAmountSaga()
  createBoardSaga(),
  getBoardListSaga()
];

export default function* rootSaga() {
  yield all(allSagas);
}
