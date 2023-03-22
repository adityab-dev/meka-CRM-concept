import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

import { AiFillDelete } from "react-icons/ai";
import { boxStyles } from "../dashboard-components/buttons-stack/buttons-stack";
import { useAppDispatch, useAppSelector } from "../../store/hooks/hook";
import { modalVisibilityController } from "../../store/slices/modals-slice";
import { clearAllFilters } from "../../store/slices/filters-slice";

export const Modal = () => {
  const { showModal } = useAppSelector((state) => state.modals);
  const dispatch = useAppDispatch();

  return (
    <Box component="section">
      <Dialog
        open={showModal}
        onClose={() => dispatch(modalVisibilityController({ showModal: false }))}
        sx={{ borderRadius: "2rem" }}
      >
        <DialogTitle margin="0 auto">Clear Filters</DialogTitle>
        <DialogContent>
          <DialogContentText>Sure you want to clear all applied filters ?</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            sx={{ backgroundColor: "orange", "&:hover": { backgroundColor: "orange" } }}
            variant="contained"
            onClick={() => dispatch(modalVisibilityController({ showModal: false }))}
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
              dispatch(clearAllFilters());
              dispatch(modalVisibilityController({ showModal: false }));
            }}
          >
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};
