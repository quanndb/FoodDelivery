import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import UserManagerSlice from "src/redux/slices/UserManagerSlice";
import { decodeAccessToken } from "src/utils/jwt-decode";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

import { Button, Typography, Box, CircularProgress } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";

import { auth } from "src/firebase/config";
import authAPI from "src/services/api/authAPI";
import TextField from "src/components/inputField/TextFiled";
import PasswordFiled from "src/components/inputField/PasswordFiled";

const LoginComponent = ({}) => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [loginState, setLoginState] = useState(false);

  const [username, setUserName] = useState("");

  const [password, setPassword] = useState("");

  const handleLoginWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    const res = await signInWithPopup(auth, provider);
    console.log(res);
  };

  const handleSignUp = () => {
    navigate("/signup");
  };

  const handleLogin = async () => {
    if (username === "" || password === "") {
      alert("Username and password cannot be blank");
    } else {
      try {
        const response = await authAPI
          .login({
            username: username,
            password: password,
          })
          .then((res) => {
            localStorage.setItem("accessToken", res.accessToken);
            const user = decodeAccessToken();
            dispatch(UserManagerSlice.actions.setUserToken(user));
          });
        setLoginState(true);
      } catch (error) {
        alert(error.message);
      }
    }
  };
  useEffect(() => {
    if (localStorage.accessToken) {
      const loadTime = setTimeout(() => {
        setLoginState(false);
        navigate("/");
      }, 1000);
      return () => clearTimeout(loadTime);
    }
  }, [loginState]);

  return (
    <Box
      sx={{
        overflowY: "auto",
        width: "100%",
        height: "100%",
        padding: "30px",
      }}
    >
      {loginState ? (
        <CircularProgress />
      ) : (
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography
            variant="h4"
            sx={{ margin: "30px 0px", fontWeight: "500" }}
          >
            Welcome to Food Delivery App
          </Typography>
          {/* ---------------------------------------------------- */}
          <TextField
            label={"Username"}
            value={username}
            setValue={setUserName}
            sx={{ margin: "10px 0px" }}
          />
          <PasswordFiled
            label={"Password"}
            value={password}
            setValue={setPassword}
            sx={{ margin: "20px 0px 30px 0px" }}
          />
          {/* ---------------------------------------------------- */}
          <Button variant="contained" onClick={handleLogin}>
            Login
          </Button>
          <Button
            variant="outlined"
            onClick={handleLoginWithGoogle}
            startIcon={<GoogleIcon />}
            sx={{ margin: "15px 0px" }}
          >
            Login with Google
          </Button>
          <Typography variant="subtitle2">
            Forgot password?{" "}
            <Button
              variant="text"
              sx={{ textDecoration: "underline", fontSize: "12px" }}
            >
              Click here
            </Button>
          </Typography>
          <Box sx={{ width: "100%" }}>
            <Typography sx={{ margin: "30px 0px 0px 0px" }}>
              Don't have an account? Sign up here{" "}
              <Button
                onClick={handleSignUp}
                sx={{ textDecoration: "underline" }}
              >
                Sign up
              </Button>
            </Typography>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default LoginComponent;
