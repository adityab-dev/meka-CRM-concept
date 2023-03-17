import { Outlet } from "react-router-dom";
import { Auth0ContenxtProvider } from "../../Components/auth0-provider/auth0-provider";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

export const AuthContextLayout = () => {
  return (
    <Auth0ContenxtProvider>
      {/* TODO: optimize => context forces re-evals.  -> more specific wrap */}
      <LocalizationProvider dateAdaptor={AdapterDateFns}>
        <Outlet />
      </LocalizationProvider>
    </Auth0ContenxtProvider>
  );
};
