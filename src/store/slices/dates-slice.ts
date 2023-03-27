import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { dateInputIds } from "../../Constants/constants";

export const enum dateStateProps {
  selectedDate = "selectedDate",
  savedDate = "savedDate",
}

type InitialDateState = {
  selectedDate: {
    [dateInputIds.startDate]: string;
    [dateInputIds.endDate]: string;
  };
  savedDate: {
    [dateInputIds.startDate]: string;
    [dateInputIds.endDate]: string;
  };
  inputElementValues: {
    [dateInputIds.startDate]: string;
    [dateInputIds.endDate]: string;
  };
};

const initialDateState: InitialDateState = {
  selectedDate: { startDate: "", endDate: "" },
  savedDate: { startDate: "", endDate: "" },
  inputElementValues: { startDate: "", endDate: "" },
};

const datesSlice = createSlice({
  name: "dates",
  initialState: initialDateState,
  reducers: {
    selectStartDate(state, action: PayloadAction<string>) {
      const startDate = action.payload;
      state.selectedDate[dateInputIds.startDate] = startDate;

      state.inputElementValues[dateInputIds.startDate] = startDate;
    },
    selectEndDate(state, action: PayloadAction<string>) {
      const endDate = action.payload;
      state.selectedDate.endDate = endDate;

      state.inputElementValues.endDate = endDate;
    },
    clearSelectedDates(state) {
      state.selectedDate = initialDateState.selectedDate;

      state.inputElementValues = state.savedDate;
    },
    applyDates(state) {
      state.savedDate = state.selectedDate;
      state.selectedDate = initialDateState.selectedDate;

      state.inputElementValues = state.savedDate;
    },
    clearSavedDates(state) {
      state.savedDate = initialDateState.savedDate;

      state.inputElementValues = initialDateState.inputElementValues;
    },
  },
});

export const { selectStartDate, selectEndDate, clearSavedDates, clearSelectedDates, applyDates } =
  datesSlice.actions;
export default datesSlice.reducer;
