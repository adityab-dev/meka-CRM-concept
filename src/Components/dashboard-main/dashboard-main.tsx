import { Pagination } from "@mui/material";
import { Box } from "@mui/system";
import { ButtonsStack } from "../dashboard-components/buttons-stack/buttons-stack";

export const DashboardMain = () => {
  return (
    <Box component="main">
      <Box component="section" display="flex" alignItems="center" justifyContent="center">
        <ButtonsStack />
        <Box sx={{ position: "absolute", bottom: "1rem", right: "1.5rem" }}>
          <Pagination count={5} size="small" />
        </Box>
      </Box>
    </Box>
  );
};
