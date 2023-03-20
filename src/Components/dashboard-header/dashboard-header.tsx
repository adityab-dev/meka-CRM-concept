import { Avatar, Typography } from "@mui/material";
import { Box } from "@mui/system";

import superAdminImage from "../../assets/Super Admin Profile Image.png";

export const DashboardHeader = () => {
  return (
    <Box
      component="header"
      height="9vh"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      padding="0 2rem"
    >
      <Typography variant="h1" sx={{ fontSize: "1.75rem", color: "#454545", opacity: 0.8 }}>
        Total Contacts
      </Typography>

      <Box display="flex" alignItems="center">
        <Avatar src={superAdminImage} />

        <Box display="flex" flexDirection="column" justifyContent="space-evenly" paddingLeft="0.5rem">
          <Typography sx={{ fontSize: "0.85rem" }}>Ram Darvin</Typography>
          <Typography sx={{ fontSize: "0.7rem", fontWeight: "light" }}>Super Admin</Typography>
        </Box>
      </Box>
    </Box>
  );
};
