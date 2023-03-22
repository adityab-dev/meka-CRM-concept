import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialModalState = {
  showModal: false,
  showInitialImport: false,
  showSuccessImport: false,
};

const modalsSlice = createSlice({
  name: "modals",
  initialState: initialModalState,
  reducers: {
    modalVisibilityController(state, action: PayloadAction<{ showModal: boolean }>) {
      const toShowModal = action.payload.showModal;

      state.showModal = toShowModal;
    },

    initialImportController(state, action: PayloadAction<{ showModal: boolean }>) {
      const { showModal } = action.payload;
      state.showInitialImport = showModal;
    },

    successImportController(state, action: PayloadAction<{ showModal: boolean }>) {
      const { showModal } = action.payload;

      state.showSuccessImport = showModal;
    },
  },
});

export const { modalVisibilityController, initialImportController, successImportController } =
  modalsSlice.actions;
export default modalsSlice.reducer;
