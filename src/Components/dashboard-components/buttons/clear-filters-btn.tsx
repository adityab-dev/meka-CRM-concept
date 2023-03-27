import { Button } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../../store/hooks/hook";
import { clearSavedDates } from "../../../store/slices/dates-slice";
import {
  datesClearController,
  modalVisibilityController,
} from "../../../store/slices/modals-slice";

export const ClearFiltersButton = () => {
  const dispatch = useAppDispatch();

  return (
    // TODO: show modal for conformation.
    <Button
      variant="outlined"
      color="warning"
      sx={{
        color: "black",
        textTransform: "none",
        padding: "0 0.25rem",
        margin: 0,
        fontSize: "0.65rem",
        height: "1.75rem",
        boxShadow: " 1px 1px 20px rgba(0, 0, 0, 0.1)",
        borderRadius: "6px",
      }}
      onClick={() => dispatch(modalVisibilityController({ showModal: true }))}
    >
      Clear Filters
    </Button>
  );
};

export const ClearDateButton = () => {
  const dispatch = useAppDispatch();
  return (
    // TODO: show modal for conformation.
    <Button
      variant="outlined"
      color="warning"
      sx={{
        color: "black",
        textTransform: "none",
        padding: "0 0.25rem",
        margin: 0,
        fontSize: "0.65rem",
        height: "1.75rem",
        boxShadow: " 1px 1px 20px rgba(0, 0, 0, 0.1)",
        borderRadius: "6px",
      }}
      onClick={() => dispatch(datesClearController({ showModal: true }))}
    >
      Clear Date
    </Button>
  );
};
