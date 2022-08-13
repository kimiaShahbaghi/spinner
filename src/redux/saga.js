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

function* GetDataFetch() {

  const configResponse = yield call(api.config);
  if (configResponse.status === 200) {
    console.log("config response", configResponse);
    const data = configResponse.data.data;
    yield put(
      setPrize({
        prizes: data["campaign_wheels"],
        title: data["campaign_config"].message.title,
        description: data["campaign_config"].message.description,
      })
    );
    const validateResponse = yield call(api.validate);
    console.log("validate response", validateResponse);
  
    if (validateResponse.data.result === true) {
      yield put(setValid(true));
    } else {
      yield put(setValid(false));
      if (validateResponse.error.subcode === 200004) {
        yield put(
          setPrize({
            prizes: null,
            title: validateResponse.error["user_title"],
            description: validateResponse.error["user_msg"],
          })
        );
      }
    }
  } else yield put(setNetworkError(true));
}

function* spin() {
  const allocateResponse = yield call(api.allocate);
  console.log("allocate response", allocateResponse);
  if (allocateResponse.status !== 200) {
    yield put(setNetworkError(true));
  }
  const data = allocateResponse.data.data;
  yield put(setRotate(data["slice_id"]));
  yield call(delay, 3000);
  yield put(
    setPrizeContent({
      title: data.message.title,
      description: data.message.description,
    })
  );
}

function* rootSaga() {
  yield takeEvery(GET_DATA_FETCH, GetDataFetch);
  yield takeEvery(SPIN_WHEEL, spin);
}

export default rootSaga;
