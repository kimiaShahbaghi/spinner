import { call, put, takeEvery } from "redux-saga/effects";
import api from "./api";
import {
  setPrize,
  setValid,
  setPrizeContent,
  setRotate,
  setNetworkError,
} from "./wheelSlice";
import { GET_DATA_FETCH, SPIN_WHEEL } from "./actions";

const delay = (time) => new Promise((resolve) => setTimeout(resolve, time));

function* getData() {
  console.log(' enter getdata')
  try {
    const configResponse = yield call(api.config);
    const data = configResponse.data.data;
    yield put(
      setPrize({
        prizes: data["campaign_wheels"],
        title: data["campaign_config"].message.title,
        description: data["campaign_config"].message.description,
      })
    );
    const validateResponse = yield call(api.validate);
    if (validateResponse.data.result === true) {
      yield put(setValid(true));
    } else {
      yield put(setValid(false));
    }
    yield put(setNetworkError(false));
  } catch {
    yield put(setNetworkError(true));
  }
}

function* spin() {
  console.log(' enter spin')
  try {
    const allocateResponse = yield call(api.allocate);
    console.log('allocate response', allocateResponse)
    const data = allocateResponse.data.data;
    yield put(setRotate(data["slice_id"]));
    yield call(delay, 6000);
    yield put(
      setPrizeContent({
        title: data.message.title,
        description: data.message.description,
      })
    );
    yield put(setNetworkError(false));
  } catch (err) {
    yield put(setNetworkError(true));
  }
}

function* rootSaga() {
  yield takeEvery(GET_DATA_FETCH, getData);
  yield takeEvery(SPIN_WHEEL, spin);
}

export default rootSaga;
