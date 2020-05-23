import { all } from "redux-saga/effects";

// import { fetchMyBiddingAmountSaga } from "./fetchMyBiddingAmountSaga";

const allSagas = [
  // fetchMyBiddingAmountSaga()
];

export default function* rootSaga() {
  yield all(allSagas);
}
