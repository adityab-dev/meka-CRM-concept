import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "state",
  initialState: "",
  reducers: {
    create() {
      console.log("in");
    },
  },
});

export const filterActions = filtersSlice.actions;
export const filterReducer = filtersSlice.reducer;
