import { CircularProgress, Container, Paper } from "@mui/material";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import SignUp from "../../components/SignUp";
import LoginComponent from "../../components/LoginComponent";
import "./index.css";

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [isLoadding, setIsLoading] = useState(false);

  useEffect(() => {
    const timerID = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => {
      clearTimeout(timerID);
    };
  }, [isLoadding]);

  if (localStorage.getItem("accessToken")) {
    return <Navigate to={"/"} />;
  }

  return (
    <div id="login-container">
      <Container
        maxWidth="lg"
        sx={{
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Paper
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "60%",
            minWidth: "350px",
            justifySelf: "center",
          }}
        >
          {isLoadding ? (
            <CircularProgress />
          ) : isSignUp ? (
            <SignUp setIsSignUp={setIsSignUp} setIsLoading={setIsLoading} />
          ) : (
            <LoginComponent
              setIsSignUp={setIsSignUp}
              setIsLoading={setIsLoading}
            />
          )}
        </Paper>
      </Container>
    </div>
  );
};

export default Login;
