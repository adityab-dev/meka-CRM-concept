import { Box, Button, Typography, Menu, MenuItem } from "@mui/material";

import { useContext } from "react";
import { filterContext } from "../../../Context/filter-context/filter-context";

import { popupIds } from "../../../Constants/constants";

const dateRanges = [
  "Today",
  "Yesterday",
  "Last 7 days",
  "This month",
  "Last month",
  "Last 6 months",
  "Last year",
];

const menuItensStyles = {
  padding: 0,
  height: "2.1rem",
};

const buttonStyles = {
  textTransform: "none",
  textAlign: "left",
  textIndent: "1rem",
  fontSize: "0.9rem",
  color: "black",
  display: "block",
  padding: 0,
  height: "100%",
  width: "100%",
};

export const DateMenu = () => {
  const {
    popupsController,
    popupState: { selectDateAnchor },
  } = useContext(filterContext);

  return (
    <Box>
      <Menu
        elevation={5}
        open={selectDateAnchor ? true : false}
        anchorEl={selectDateAnchor}
        onClose={() =>
          popupsController({ element: { setNull: true, id: popupIds.selectDateAnchor } })
        }
        transformOrigin={{ vertical: -10, horizontal: 0 }}
        onClick={() => console.log("clicked")}
      >
        {dateRanges.map((range) => {
          return (
            <MenuItem sx={menuItensStyles} key={range}>
              <Button sx={buttonStyles}>{range}</Button>
            </MenuItem>
          );
        })}

        <MenuItem sx={{ ...menuItensStyles, marginTop: "1.25rem" }}>
          <Button
            variant="contained"
            sx={{
              marginLeft: "1rem",
              marginRight: "0.75rem",
              padding: "0.25rem 0.5rem",
              background: "#FE8627",
              textTransform: "none",
              borderRadius: "6px",
              "&:hover": { backgroundColor: "#FE8627" },
            }}
            onClick={(event) =>
              popupsController({
                element: { setNull: false, id: popupIds.customDateAnchor },
                event,
              })
            }
          >
            Custom date
            <Typography sx={{ paddingLeft: "1rem" }} className="align-center">
              |
            </Typography>
          </Button>
        </MenuItem>
      </Menu>
    </Box>
  );
};
