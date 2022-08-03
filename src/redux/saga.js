import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import api from './api'
import { setPrize } from "./wheelSlice";
import { GET_DATA_FETCH } from "./actions";

function* GetDataFetch() {
  console.log('CALL API');
  const response = yield call(api.config);
  console.log(response,'response');
  yield put(setPrize({
    prizes: response.data['campaign_wheels'],
    title: response.data['campaign_config'].message.title,
    description: response.data['campaign_config'].message.title
  }));
  // yield put(setLoading(false));
}


function* rootSaga() {

  yield takeEvery(GET_DATA_FETCH, GetDataFetch);
}

export default rootSaga;
