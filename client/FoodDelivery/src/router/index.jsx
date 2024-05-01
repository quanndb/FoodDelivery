import { Outlet, createBrowserRouter } from "react-router-dom";

import Home from "src/pages/Home/view";
import Login from "src/pages/Login/view";
import AuthProvider from "src/context/AuthProvider";
import ProtectedRoute from "./ProtectedRoute";
import Order from "src/pages/Order/view";
import Restaurants from "src/pages/Restaurants";
import Restaurant from "src/pages/Restaurant";
import PromoDelivery from "src/pages/PromoDelivery";
import SignUp from "src/pages/SignUp";
import Profile from "src/pages/Profile";

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
        element: <SignUp />,
        path: "/signup",
      },
      {
        element: <Home />,
        path: "/",
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
            element: <Profile />,
            path: "/profile",
          },
          {
            element: <Restaurants />,
            path: "/restaurants",
          },
          {
            element: <Restaurant />,
            path: "/restaurant/:restaurantId",
          },
          {
            element: <PromoDelivery />,
            path: "/promos-delivery",
          },
        ],
      },
    ],
  },
]);
