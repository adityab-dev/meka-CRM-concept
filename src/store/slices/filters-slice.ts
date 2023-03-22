import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { listNames } from "../../Constants/constants";
import { menuItems, checklists } from "../../Constants/filter-content";

export type InitialState = {
  selectedCategory: listNames;
  checklist: string[];
  selectedFilters: string[];
  appliedFilters: string[];
};

const initialState: InitialState = {
  selectedCategory: listNames.designations,
  checklist: [],
  selectedFilters: [],
  appliedFilters: [],
};

const filterButtonSlice = createSlice({
  name: "slice",
  initialState,
  reducers: {
    categoryClickHandler(state, action: PayloadAction<string>) {
      const clickedCategory = action.payload as listNames;
      state.selectedCategory = clickedCategory;

      let items: listNames;

      for (items in checklists) {
        if (clickedCategory === items) state.checklist = checklists[items];
      }
    },
    checkboxInteractionHandler(
      state,
      action: PayloadAction<{ value: string; isChecked: boolean }>
    ) {
      const { value: interactedWith, isChecked: checked } = action.payload;

      if (!checked) {
        const unCheckedItemIndex = state.selectedFilters.findIndex(
          (value) => interactedWith === value
        );

        state.selectedFilters.splice(unCheckedItemIndex, 1);
      }

      if (checked) state.selectedFilters.push(interactedWith);
    },
    applyButtonClickHandler(state) {
      state.appliedFilters = state.selectedFilters;
    },
    clearAllFilters(state) {
      state.selectedFilters = [];
      state.appliedFilters = [];
    },
    clearSelectedFilters(state) {
      state.selectedFilters = [];
    },
  },
});

export const {
  categoryClickHandler,
  checkboxInteractionHandler,
  applyButtonClickHandler,
  clearAllFilters,
  clearSelectedFilters,
} = filterButtonSlice.actions;

export default filterButtonSlice.reducer;
