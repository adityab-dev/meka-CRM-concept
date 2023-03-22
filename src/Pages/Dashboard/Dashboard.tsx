import { Box } from "@mui/material";

import "./Dashboard.css";

import { DashboardMain } from "../../Components/dashboard-main/dashboard-main";
import { DashboardHeader } from "../../Components/dashboard-header/dashboard-header";
import { DashboardList } from "../../Components/dashboard-list/Dashboard-list";
import { FilterContextProvider } from "../../Context/filter-context/filter-context-provider";

export const boxStyles = {
  height: "35rem",
  width: "35rem",
  borderRadius: "15px",
  backgroundColor: "#FBFBFB",
  marginLeft: "5rem",
};

// TODO: left margin unmodifiable.
export const buttonStyles = {
  backgroundColor: "white",
  boxShadow: "1px 1px 20px rgba(0, 0, 0, 0.1)",
  color: "black",
  textTransform: "none",
  borderRadius: "10px",
  "&.MuiButton-endIcon": {
    marginLeft: "0",
  },
};

export const stackStyles = {
  display: "flex",
  flexDirection: "row",
  borderRadius: "5px",
  height: "2.5rem",
  gap: "1rem",
};

export const menuItemBox = {
  width: "100%",
  height: "100%",
  padding: "0",
  margin: "0",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "1rem",
};

export const menuListButtonStyles = {
  color: "black",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0.25rem 0.6rem",
  width: "10rem",
  textTransform: "none",
  "&:hover": {
    background: "rgba(255, 235, 218, 0.31)",
    color: "rgba(20, 20, 20, 0.71)",
  },
};

export const menuItemStyles = {
  "&:hover": { background: "rgba(255, 235, 218, 0.31)" },
  padding: "0",
};

export const Dashboard = () => {
  return (
    <Box display="flex">
      <DashboardList />

      <Box component="section" flexGrow="1">
        <DashboardHeader />
        <FilterContextProvider>
          <DashboardMain />
        </FilterContextProvider>
      </Box>
    </Box>
  );
};
