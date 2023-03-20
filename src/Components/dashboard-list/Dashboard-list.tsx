import { Avatar, Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { MdContacts, MdOutlineDashboard, MdOutlineLogout } from "react-icons/md";

import smallLogo from "../../assets/logo-small.png";

const dashboardListStyles = {
  background: "#FFF9F5",
  width: "13.5vw",
  height: "100vh",
};

export const DashboardList = () => {
  return (
    <Box sx={dashboardListStyles} display="flex" justifyContent="center">
      <Box width="80%" paddingTop="2rem">
        <Box display="flex" alignItems="center" gap="0.5rem">
          <Avatar src={smallLogo} />
          <Typography fontWeight="bold" fontSize="1.1rem">
            Emproto
          </Typography>
        </Box>

        <Box paddingTop="3rem" flexDirection="column" display="flex" alignItems="center">
          <Button
            sx={{ color: "black", textTransform: "none", fontSize: "0.85rem", padding: "0.5rem 0" }}
            startIcon={<MdOutlineDashboard color="black" />}
          >
            Dashboard
          </Button>

          <Button
            sx={{
              color: "white",
              backgroundColor: "#FE8627",
              textTransform: "none",
              padding: "0.5rem 0.5rem",
              borderRadius: "5px",
              "&:hover": {
                backgroundColor: "#FE8627",
              },
            }}
            startIcon={<MdContacts />}
          >
            Total Contacts
          </Button>
        </Box>

        <Box display="flex" justifyContent="center" marginTop="38.5rem">
          <Button
            startIcon={<MdOutlineLogout />}
            sx={{
              color: "black",
              fontSize: "0.85rem",
              textTransform: "none",
            }}
          >
            Log out
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
