import { Box, Button, ListItem, Typography, Menu, MenuItem } from "@mui/material";

import { useContext } from "react";
import { filterContext } from "../../../Context/filter-context/filter-context";

import { popupIds } from "../../../Constants/constants";

export const DateMenu = () => {
  const {
    popupsController,
    popupState: { selectDateAnchor },
  } = useContext(filterContext);

  return (
    <Box>
      <Menu elevation={5} open={selectDateAnchor ? true : false}>
        <MenuItem>
          <Button>Today</Button>
        </MenuItem>
        <MenuItem>
          <Button>Yesterday</Button>
        </MenuItem>
        <MenuItem>
          <Button>Last 7 days</Button>
        </MenuItem>
        <MenuItem>
          <Button>This month</Button>
        </MenuItem>
        <MenuItem>
          <Button>Last month</Button>
        </MenuItem>
        <MenuItem>
          <Button>Last 6 months</Button>
        </MenuItem>
        <MenuItem sx={{ marginBottom: "0.5rem" }}>
          <Button>Last year</Button>
        </MenuItem>

        <ListItem>
          <Button
            variant="contained"
            sx={{
              background: "#FE8627",
              textTransform: "none",
              borderRadius: "6px",
              "&:hover": { backgroundColor: "#FE8627" },
            }}
            onClick={(event) =>
              popupsController({ element: { id: popupIds.selectDateAnchor }, event })
            }
          >
            Custom date
            <Typography sx={{ paddingLeft: "2rem" }} className="align-center">
              |
            </Typography>
          </Button>
        </ListItem>
      </Menu>
    </Box>
  );
};
