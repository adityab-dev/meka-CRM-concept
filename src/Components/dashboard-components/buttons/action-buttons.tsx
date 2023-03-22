import { Box, Button } from "@mui/material";
import { buttonStyles } from "./filter-buttons";
import { CiExport } from "react-icons/ci";
import { MdDeleteForever, MdOutlineImportExport } from "react-icons/md";
import { useAppDispatch } from "../../../store/hooks/hook";
import { initialImportController } from "../../../store/slices/modals-slice";

export const actionButtonStyles = {
  padding: "0 0.5rem",
  ".MuiButtonBase-root": { padding: "0rem" },
};

export const DeleteButton = () => {
  return (
    <Button
      sx={buttonStyles}
      startIcon={
        <Box sx={actionButtonStyles}>
          <MdDeleteForever size={15} />
        </Box>
      }
    >
      Delete
    </Button>
  );
};

export const ImportButton = () => {
  const dispatch = useAppDispatch();
  return (
    <Button
      sx={buttonStyles}
      startIcon={
        <Box sx={actionButtonStyles}>
          <MdOutlineImportExport size={15} />
        </Box>
      }
      onClick={() => dispatch(initialImportController({ showModal: true }))}
    >
      Import
    </Button>
  );
};

export const ExportButton = () => {
  return (
    <Button
      sx={{ ...buttonStyles, ...actionButtonStyles }}
      startIcon={
        <Box sx={actionButtonStyles}>
          <CiExport size={15} />
        </Box>
      }
    >
      Export
    </Button>
  );
};
