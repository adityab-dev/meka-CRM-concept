import { createSlice } from "@reduxjs/toolkit";

const initialDateState = {
  menuItems: [
    "Today",
    "Yesterday",
    "Last 7 days",
    "This month",
    "Last month",
    "Last 6 months",
    "Last year",
  ],
};

const datesSlice = createSlice({
  name: "dates",
  initialState: initialDateState,
  reducers: {},
});

export default datesSlice.reducer;
