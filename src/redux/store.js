import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import Saga from './saga';

export const store = configureStore({
    reducer: {
      sentimentReducer,
 
    },
    middleware: [sagaMiddleware],
  });
  
  sagaMiddleware.run(Saga);