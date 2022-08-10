import { createAction } from "@reduxjs/toolkit";

export const SPIN_WHEEL = "SPIN_WHEEL";
export const GET_DATA_FETCH = "GET_DATA_FETCH";
export const getDataFetch = createAction(GET_DATA_FETCH);
export const spinWheel = createAction(SPIN_WHEEL);
