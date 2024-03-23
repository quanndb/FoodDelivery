import { CircularProgress, Container, Paper, Box } from "@mui/material";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import SignUp from "../../layouts/components/login/SignUp";
import LoginComponent from "../../layouts/components/login/LoginComponent";
import "./index.css";
import { auth } from "../../firebase/config";

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
        <Box
          style={{
            padding: " 6px 0px",
            width: "450px",
            minWidth: "350px",
            height: "60%",
          }}
        >
          <Paper
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifySelf: "center",
              height: "100%",
              borderRadius: 4,
              maxWidth: "500px",
              overflowY: "auto",
            }}
          >
            {isLoadding ? (
              <CircularProgress style={{ overflow: "hidden" }} />
            ) : isSignUp ? (
              <SignUp setIsSignUp={setIsSignUp} setIsLoading={setIsLoading} />
            ) : (
              <LoginComponent
                setIsSignUp={setIsSignUp}
                setIsLoading={setIsLoading}
              />
            )}
          </Paper>
        </Box>
      </Container>
    </div>
  );
};

export default Login;
