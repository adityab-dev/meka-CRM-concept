import { configureStore } from "@reduxjs/toolkit";

import sliceReducer from "../slices/filters-slice";
import modalsReducer from "../slices/modals-slice";
import datesReducer from "../slices/dates-slice";

export const store = configureStore({
  reducer: {
    filters: sliceReducer, 
    modals: modalsReducer, 
    dates: datesReducer 
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
