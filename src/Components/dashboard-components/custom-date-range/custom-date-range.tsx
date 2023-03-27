import { Box, Menu, MenuItem, Button } from "@mui/material";
import { useContext } from "react";
import { BsDashLg } from "react-icons/bs";
import { dateInputIds, popupIds } from "../../../Constants/constants";
import { filterContext } from "../../../Context/filter-context/filter-context";
import { useAppDispatch, useAppSelector } from "../../../store/hooks/hook";
import {
  applyDates,
  clearSelectedDates,
  dateStateProps,
  selectEndDate,
  selectStartDate,
} from "../../../store/slices/dates-slice";

export const CustomDateRange = () => {
  const {
    inputElementValues: { startDate: startInputValue, endDate: endInputValue },
    savedDate: { startDate: savedStartDate, endDate: savedEndDate },
    selectedDate: { startDate: selectedStartDate, endDate: selectedEndDate },
  } = useAppSelector((state) => state.dates);

  const dispatch = useAppDispatch();

  const {
    popupsController,
    popupState: { customDateAnchor },
  } = useContext(filterContext);

  return (
    <Box>
      <Menu
        open={customDateAnchor ? true : false}
        anchorEl={customDateAnchor}
        onClose={() => {
          popupsController({ element: { setNull: true, id: popupIds.customDateAnchor } });
          dispatch(clearSelectedDates());
        }}
        transformOrigin={{ vertical: 100, horizontal: -132.5 }}
      >
        <MenuItem>
          <input
            id={dateInputIds.startDate}
            type="date"
            onChange={(event) => dispatch(selectStartDate(event.target.value))}
            value={startInputValue}
            max={endInputValue}
          />
          <input
            id={dateInputIds.endDate}
            type="date"
            onChange={(event) => dispatch(selectEndDate(event.target.value))}
            value={endInputValue}
            min={startInputValue}
          />
        </MenuItem>
        <MenuItem>
          <Box display="flex" justifyContent="space-between" padding="0 0.25rem" width="100%">
            <Box>{savedStartDate}</Box>
            <Box display="flex" alignItems="center">
              <BsDashLg />
            </Box>
            <Box>{savedEndDate}</Box>
          </Box>
        </MenuItem>
        <MenuItem sx={{ background: "#FCECDD" }}>
          <Button
            sx={{
              boxShadow: "1px 2px 8px rgba(253, 181, 75, 0.25)",
              borderRadius: "7.5px",
              backgroundColor: "white",
              color: "black",
              fontSize: "0.85rem",
              fontWeight: "bold",
              height: "2rem",
              marginRight: "1.25rem",
            }}
          >
            Cancel
          </Button>

          <Button
            sx={{
              boxShadow: "1px 1px 20px rgba(0, 0, 0, 0.1)",
              borderRadius: "7.5px",
              backgroundColor: "#FE8627",
              color: "white",
              fontSize: "0.85rem",
              height: "2rem",
              marginRight: "1.25rem",
              "&:hover": {
                backgroundColor: "#FE8627",
              },
            }}
            onClick={() => dispatch(applyDates())}
          >
            Apply
          </Button>
        </MenuItem>
      </Menu>
    </Box>
  );
};
