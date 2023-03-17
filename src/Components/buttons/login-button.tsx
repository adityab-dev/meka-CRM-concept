import google from "../../assets/google.png";
import { useAuth0 } from "@auth0/auth0-react";
import { dashboardPath } from "../../Constants/paths";

export const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  const handleLogin = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: dashboardPath,
      },
      authorizationParams: {
        prompt: "login",
      },
    });
  };

  return (
    <button id="login-btn" onClick={handleLogin}>
      <img src={google} alt="Google Logo" id="google-logo" />
      Sign up or Sign In with Google
    </button>
  );
};
