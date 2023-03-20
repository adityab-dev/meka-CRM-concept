import { Box, Button } from "@mui/material";
import { buttonStyles } from "./filter-buttons";
import { CiExport } from "react-icons/ci";
import { MdDeleteForever, MdOutlineImportExport } from "react-icons/md";

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
  return (
    <Button
      sx={buttonStyles}
      startIcon={
        <Box sx={actionButtonStyles}>
          <MdOutlineImportExport size={15} />
        </Box>
      }
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
