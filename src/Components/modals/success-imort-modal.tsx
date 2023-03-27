import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

import successfullImportIcon from "../../assets/successful-deletion.png";
import { useAppDispatch, useAppSelector } from "../../store/hooks/hook";
import { successImportController } from "../../store/slices/modals-slice";

export const SuccessImportModal = () => {
  const { showSuccessImport } = useAppSelector((state) => state.modals);
  const dispatch = useAppDispatch();

  return (
    <Box component="section">
      <Dialog
        open={showSuccessImport}
        onClose={() => dispatch(successImportController({ showModal: false }))}
        sx={{ borderRadius: "2rem" }}
      >
        <DialogTitle display="flex" justifyContent="center" sx={{ padding: 0, paddingTop: "4rem" }}>
          <img src={successfullImportIcon} />
        </DialogTitle>
        <DialogTitle margin="0 auto">Import Complete</DialogTitle>
        <DialogContent>
          <DialogContentText
            sx={{
              color: "#FE8627",
              width: "60%",
              margin: "auto",
              textAlign: "center",
            }}
          >
            CSV File is Uploaded
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </Box>
  );
};
