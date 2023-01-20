import { call, put, takeEvery } from "redux-saga/effects";
import { getCatsSuccess } from "./catState";

function* workGetCatsFetch() {
  const cats = yield call(() => fetch("https://api.thecatapi.com/v1/breeds"));
  const jsonCats = (yield cats.json()).slice(0, 100);
  yield put(getCatsSuccess(jsonCats));
}

function* catSaga() {
  yield takeEvery("cats/getCatsFetch", workGetCatsFetch);
}

export default catSaga;
