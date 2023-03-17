import "./App.css";
import { LoginPage } from "./Pages/login-page/login-page";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Dashboard } from "./Pages/Dashboard/Dashboard";
import { dashboardPath, loginPath } from "./Constants/paths";
import { AuthContextLayout } from "./Layout/Auth0-context-layout/auth0-context-layout";

function App() {
  const router = createBrowserRouter([
    {
      path: loginPath,
      element: <AuthContextLayout />,
      children: [
        { index: true, element: <LoginPage /> },
        { path: dashboardPath, element: <Dashboard /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
