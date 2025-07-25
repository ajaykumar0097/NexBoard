import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import MainLayout from "./pages/MainLayout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
       
    ],
  },
  {
        path: "/Login",
        element: <Login />,
      },
        {
        path: "/Register",
        element: <Register />,
      },
      {
        path: "/ForgotPassword",
        element: <ForgotPassword />,
      },
]);
