import { Outlet, createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import AuthProvider from "../context/AuthProvider";
import ProtectedRoute from "./ProtectedRoute";
import Order from "../pages/Order";
import Restaurants from "../pages/Restaurants";
import Restaurant from "../pages/Restaurant";

const AuthLayout = () => {
  return (
    <AuthProvider>
      <Outlet />
    </AuthProvider>
  );
};

export default createBrowserRouter([
  {
    element: <AuthLayout />,
    children: [
      {
        element: <Login />,
        path: "/login",
      },
      {
        element: <ProtectedRoute />,
        children: [
          {
            element: <Home />,
            path: "/",
          },
          {
            element: <Order />,
            path: "/order",
          },
          {
            element: <Restaurants />,
            path: "/restaurants",
          },
          {
            element: <Restaurant />,
            path: "/restaurant/:restaurantId",
          },
        ],
      },
    ],
  },
]);
