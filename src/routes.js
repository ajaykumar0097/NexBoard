import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import MainLayout from "./pages/MainLayout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import ProductView from "./pages/ProductView";
import Ecommerce from "./pages/Ecommerce";
import ProductUpload from "./pages/ProductUpload/ProductUpload"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
        children: [
          {
            path: "Ecommerce",
            element: <Ecommerce />,
          },
          {
            path: "productview",
            element: <ProductView />,
          },
                    {
            path: "ProductUpload",
            element: <ProductUpload />,
          },
        ],
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
