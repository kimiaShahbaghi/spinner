import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./saga";
import wheelReducer from '../redux/wheelSlice'

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    wheelReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);
