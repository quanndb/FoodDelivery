import { Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import { CircularProgress } from "@mui/material";

import LoginComponent from "../LoginContent";
import { AuthLayout } from "src/layouts";

const Login = () => {
  if (localStorage.getItem("accessToken")) {
    return <Navigate to={"/"} />;
  }

  return (
    <>
      <Helmet>
        <title>Login | FD food</title>
      </Helmet>

      <AuthLayout>
        <LoginComponent />
      </AuthLayout>
    </>
  );
};

export default Login;
