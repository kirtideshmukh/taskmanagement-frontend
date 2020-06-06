import { all } from "redux-saga/effects";

// import { fetchMyBiddingAmountSaga } from "./fetchMyBiddingAmountSaga";
import { createBoardSaga } from "./createBoardSaga";
import { getBoardListSaga } from "./fetchBoardsSaga";
import { deleteBoardSaga } from "./deleteBoardSaga";
import { fetchBoardDetailsSaga } from "./fetchBoardDetailsSaga";
import { searchBoardSaga } from "./searchBoardSaga"
import { fetchTaskDetailsSaga } from "./fetchTaskDetailsSaga";
import { createTaskSaga} from "./createTaskSaga"
import { updateTaskSaga } from "./updateTaskSaga"
import { fetchLabelsSaga} from "./fetchLabelsSaga"
import { fetchPrioritiesSaga } from "./fetchPrioritiesSaga"
import { fetchStatusListSaga } from "./fetchStatusListSaga"

const allSagas = [
  // fetchMyBiddingAmountSaga()
  createBoardSaga(),
  getBoardListSaga(),
  deleteBoardSaga(),
  fetchBoardDetailsSaga(),
  searchBoardSaga(),
  fetchTaskDetailsSaga(),
  createTaskSaga(),
  updateTaskSaga(),
  fetchLabelsSaga(),
  fetchPrioritiesSaga(),
  fetchStatusListSaga()
];

export default function* rootSaga() {
  yield all(allSagas);
}
