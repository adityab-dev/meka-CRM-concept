import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

import { useAppDispatch, useAppSelector } from "../../store/hooks/hook";
import { clearSavedDates } from "../../store/slices/dates-slice";
import { datesClearController } from "../../store/slices/modals-slice";

export const DatesClearModal = () => {
  const { showDatesClear } = useAppSelector((state) => state.modals);
  const dispatch = useAppDispatch();

  return (
    <Box component="section">
      <Dialog
        open={showDatesClear}
        onClose={() => dispatch(datesClearController({ showModal: false }))}
        sx={{ borderRadius: "2rem" }}
      >
        <DialogTitle margin="0 auto">Clear Dates</DialogTitle>
        <DialogContent>
          <DialogContentText>Sure you want to clear all applied filters ?</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            sx={{ backgroundColor: "orange", "&:hover": { backgroundColor: "orange" } }}
            variant="contained"
          >
            Cancel
          </Button>
          <Button
            sx={{
              color: "black",
              fontSize: "1rem",
              fontWeight: "bold",
              "&:hover": { backgroundColor: "wheat" },
            }}
            onClick={() => {
              dispatch(clearSavedDates());
              dispatch(datesClearController({ showModal: false }));
            }}
          >
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};
