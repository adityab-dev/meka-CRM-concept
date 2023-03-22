import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  FormGroup,
  Menu,
  MenuItem,
} from "@mui/material";

import { useContext } from "react";
import { popupIds } from "../../../Constants/constants";
import { filterContext } from "../../../Context/filter-context/filter-context";
import { useAppDispatch, useAppSelector } from "../../../store/hooks/hook";
import {
  applyButtonClickHandler,
  checkboxInteractionHandler,
} from "../../../store/slices/filters-slice";

export const CountriesChecklist = () => {
  // TODO: suggestion => useRef
  // const { openFilterChecklist, filterChecklistAnchor, filterChecklistController } =
  //   useContext(filterContext);

  const {
    popupsController,
    popupState: { filterChecklistAnchor },
  } = useContext(filterContext);

  const { checklist, selectedFilters } = useAppSelector((state) => state.filters);

  const dispatch = useAppDispatch();

  return (
    <Box>
      <FormControl>
        <FormGroup>
          <Menu
            elevation={7}
            open={filterChecklistAnchor ? true : false}
            anchorEl={filterChecklistAnchor}
            onClose={() =>
              popupsController({ element: { setNull: true, id: popupIds.filterChecklistAnchor } })
            }
            anchorOrigin={{ vertical: "top", horizontal: 152.5 }}
            sx={{ ".MuiList-root": { padding: "0" } }}
          >
            {checklist.map((item, index) => {
              return (
                <Box key={index}>
                  <MenuItem
                    sx={{ padding: 0, paddingTop: "0.5rem", paddingLeft: "1.5rem" }}
                    key={index}
                  >
                    <FormControlLabel
                      sx={{ ".MuiButtonBase-root": { padding: 0 } }}
                      label={item}
                      control={
                        <Checkbox
                          sx={{
                            marginRight: "0.5rem",
                            ".MuiTypography-root": { fontSize: "2rem" },
                          }}
                          value={item}
                          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                            dispatch(
                              checkboxInteractionHandler({
                                value: event.target.value,
                                isChecked: event.target.checked,
                              })
                            )
                          }
                          checked={selectedFilters.includes(item)}
                        />
                      }
                    />
                  </MenuItem>

                  <Divider orientation="horizontal" />
                </Box>
              );
            })}

            <Box
              sx={{
                background: "#FCECDD",
                height: "3.25rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
              }}
            >
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
                onClick={() => dispatch(applyButtonClickHandler())}
              >
                Apply
              </Button>
            </Box>
          </Menu>
        </FormGroup>
      </FormControl>
    </Box>
  );
};
