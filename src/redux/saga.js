import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { fetchUsers, PostUserData } from "./api";
import { setQuestion, setLoading, clearQuestion } from "./sentimentSlice";
import { GET_USERS_FETCH, POST_DATA } from "./actions";

function* GetUsersFetch() {
  const response = yield call(fetchUsers);
  yield put(setQuestion(response.random));
  yield put(setLoading(false));
}

function* postUsersFetch(action) {
  //#FIXME: this should be get from userSelector
  const userId = 0;
  const data = action.payload;
  yield put(setLoading(true));
  const response = yield call(PostUserData, data, userId);

  if (response.status === 200) {
    yield put(clearQuestion());
    yield put(setLoading(false));
  } else {
    yield put(setLoading(true));
  }
}

function* mySaga() {
  yield takeEvery(POST_DATA, postUsersFetch);
  yield takeEvery(GET_USERS_FETCH, GetUsersFetch);
}

export default mySaga;