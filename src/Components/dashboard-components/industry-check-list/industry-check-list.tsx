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

import { useState } from "react";

const industries = [
  "Retail",
  "Consumer goods",
  "Consumer services",
  "Appreal & Fashions",
  "Oil & Energy",
  "Logistics",
  "Internet",
  "Hospital & Healthcare",
];

export const IndustryChecklist = (props: {
  filterCategoryAnchorEl: HTMLElement | null;
  onClose: () => void;
}) => {
  const [checkedValues, setCheckedValues] = useState<string[]>([]);

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const checkboxValue = event.target.value;
    if (checkedValues.indexOf(checkboxValue) === -1) {
      setCheckedValues((prevState) => {
        let newState = structuredClone(prevState);
        newState.push(checkboxValue);
        return newState;
      });
    } else {
      const index = checkedValues.findIndex((savedValue) => savedValue === checkboxValue);
      setCheckedValues((prevState) => {
        prevState.splice(index, 1);
        return structuredClone(prevState);
      });
    }
  };

  const { filterCategoryAnchorEl } = props;

  return (
    <Box>
      <FormControl>
        <FormGroup>
          <Menu
            open={filterCategoryAnchorEl !== null ? true : false}
            anchorEl={filterCategoryAnchorEl}
            onClose={() => props.onClose()}
            anchorOrigin={{ vertical: "top", horizontal: 260.5 }}
            transformOrigin={{ vertical: "top", horizontal: "center" }}
            sx={{ ".MuiList-root": { padding: "0" } }}
          >
            {industries.map((industry, index) => {
              return (
                <Box key={index}>
                  <MenuItem
                    sx={{ padding: 0, paddingTop: "0.5rem", paddingLeft: "1.5rem" }}
                    key={index}
                  >
                    <FormControlLabel
                      sx={{ ".MuiButtonBase-root": { padding: 0 } }}
                      label={industry}
                      control={
                        <Checkbox
                          sx={{
                            marginRight: "0.5rem",
                            ".MuiTypography-root": { fontSize: "2rem" },
                          }}
                          value={industry}
                          // checked={checkedValues.includes("CEO")}
                          onChange={changeHandler}
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
