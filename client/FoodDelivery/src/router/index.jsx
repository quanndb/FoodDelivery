import { Outlet, createBrowserRouter } from "react-router-dom";
import Home from "src/pages/Home";
import Login from "src/pages/Login";
import AuthProvider from "src/context/AuthProvider";
import ProtectedRoute from "./ProtectedRoute";
import Order from "src/pages/Order";
import Restaurants from "src/pages/Restaurants";
import Restaurant from "src/pages/Restaurant";
import PromoDelivery from "src/pages/PromoDelivery";

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
