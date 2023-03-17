import { Auth0Provider, AppState } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import { DOMAIN, CLIENT_ID, CALLBACK_URL } from "../../Constants/auth0-config";

export const Auth0ContenxtProvider = (props: { children: React.ReactElement }) => {
  if (!(DOMAIN && CLIENT_ID && CALLBACK_URL)) {
    return null;
  }

  const navigate = useNavigate();

  const redirectHandler = (appState?: AppState) => {
    navigate(appState?.returnTo || window.location.pathname);
  };

  return (
    <Auth0Provider
      domain={DOMAIN}
      clientId={CLIENT_ID}
      authorizationParams={{ redirect_uri: CALLBACK_URL }}
      onRedirectCallback={redirectHandler}
    >
      {props.children}
    </Auth0Provider>
  );
};
