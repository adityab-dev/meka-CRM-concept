import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

import { useEffect } from "react";

import initialImportIcon from "../../assets/initial-import-icon.png";
import { boxStyles } from "../dashboard-components/buttons-stack/buttons-stack";
import { useAppDispatch, useAppSelector } from "../../store/hooks/hook";
import { initialImportController, successImportController } from "../../store/slices/modals-slice";

export const ImportModal = () => {
  const { showInitialImport } = useAppSelector((state) => state.modals);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const delayMs = 2500;

    if (showInitialImport) {
      setTimeout(() => {
        dispatch(initialImportController({ showModal: false }));
        dispatch(successImportController({ showModal: true }));
      }, delayMs);
    }
  }, [showInitialImport]);

  return (
    <Box component="section">
      <Dialog
        open={showInitialImport}
        onClose={() => dispatch(initialImportController({ showModal: false }))}
        sx={{ borderRadius: "2rem" }}
      >
        <DialogTitle display="flex" justifyContent="center" sx={{ padding: 0, paddingTop: "4rem" }}>
          <img src={initialImportIcon} />
        </DialogTitle>
        <DialogTitle margin="0 auto">Import File</DialogTitle>
        <DialogContent>
          <DialogContentText
            sx={{
              color: "#FE8627",
              width: "60%",
              margin: "auto",
              textAlign: "center",
            }}
          >
            Drag & Drop a CSV File to Upload
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{ margin: "auto", paddingBottom: "2rem" }}>
          <Button
            // sx={{ backgroundColor: "orange", "&:hover": { backgroundColor: "orange" } }}
            variant="contained"
            onClick={() => dispatch(initialImportController({ showModal: false }))}
          >
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};
