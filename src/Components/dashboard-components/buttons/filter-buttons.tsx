import { Button, Stack } from "@mui/material";
import { useContext } from "react";
import { AiOutlineDown } from "react-icons/ai";
import { BsFilter, BsCalendarDate } from "react-icons/bs";
import { popupIds } from "../../../Constants/constants";
import { filterContext } from "../../../Context/filter-context/filter-context";

export const buttonStyles = {
  boxShadow: "1px 1px 20px rgba(0, 0, 0, 0.1)",
  borderRadius: "7.5px",
  textTransform: "none",
  color: "Black",
  fontSize: "0.85rem",
  padding: "0 0.75rem",
  height: "2.25rem",
  ".MuiButton-startIcon": {
    marginRight: "0.25rem",
    padding: 0,
  },
  ".MuiButton-endIcon": {
    marginLeft: "0.25rem",
    padding: 0,
  },
};

// TODO: some styles are common for all buttons in buttons-stack
export const FilterButton = () => {
  // const { filterCategoryController } = useContext(filterContext);
  const { popupsController } = useContext(filterContext);

  return (
    <Stack display="flex" direction="row">
      <Button
        sx={buttonStyles}
        startIcon={<BsFilter size={17.5} />}
        endIcon={<AiOutlineDown size={11} />}
        onClick={(event) => {
          popupsController({
            element: { setNull: false, id: popupIds.filterCategoriesAnchor },
            event,
          });
        }}
      >
        Filters |
      </Button>
    </Stack>
  );
};

export const SelectDateButton = () => {
  return (
    <Button
      sx={buttonStyles}
      startIcon={<BsCalendarDate size={15} />}
      endIcon={<AiOutlineDown size={11} />}
    >
      Select Date
    </Button>
  );
};
