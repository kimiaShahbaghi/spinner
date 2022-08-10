import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import api from "./api";
import { setPrize, setValid, setPrizeIndex } from "./wheelSlice";
import { GET_DATA_FETCH, SPIN_WHEEL } from "./actions";

function* spin() {
  console.log("hi");
  const allocateResponse = yield call(api.allocate);
  // yield put(setPrizeIndex());
  console.log("allocate response", allocateResponse);
}
function* GetDataFetch() {
  console.log("first line");
  const configResponse = yield call(api.config);
  console.log("config response", configResponse);
  yield put(
    setPrize({
      prizes: configResponse.data.data["campaign_wheels"],
      title: configResponse.data.data["campaign_config"].message.title,
      description:
        configResponse.data.data["campaign_config"].message.description,
    })
  );
  const validateResponse = yield call(api.validate);
  yield put(setValid(true));
  console.log("validate response", validateResponse);
}

function* rootSaga() {
  yield takeEvery(GET_DATA_FETCH, GetDataFetch);
  yield takeEvery(SPIN_WHEEL, spin);
}

export default rootSaga;
