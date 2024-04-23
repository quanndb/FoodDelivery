import {
  Button,
  Typography,
  Box,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  CircularProgress,
} from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { auth } from "src/firebase/config";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useEffect, useState } from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";

const LoginComponent = ({ setIsSignUp, setIsLoading }) => {
  const navigate = useNavigate();

  const [loginState, setLoginState] = useState(false);

  const [showPassword, setShowPassword] = useState(false);

  const [username, setUserName] = useState("");

  const [password, setPassword] = useState("");

  const handleClickShowPassword = (e) => {
    setShowPassword((show) => !show);
  };

  const handleLoginWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    const res = await signInWithPopup(auth, provider);
    console.log(res);
  };

  const handleSignUp = () => {
    setIsSignUp(true);
    setIsLoading(true);
  };

  const handleLogin = async () => {
    if (username === "" || password === "") {
      alert("Username and password cannot be blank");
    } else {
      try {
        const response = await axios.post(
          "http://localhost:2818/api/v1/admin/login",
          {
            username: username,
            password: password,
          }
        );
        localStorage.setItem("accessToken", response.data.token);
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
      }}
    >
      {loginState ? (
        <CircularProgress />
      ) : (
        <>
          <Typography
            variant="h4"
            sx={{ margin: "30px 0px", fontWeight: "500" }}
          >
            Welcome to Food Delivery App
          </Typography>
          {/* ---------------------------------------------------- */}
          <>
            <FormControl
              required
              sx={{ m: 1, width: "60%", minWidth: "300px" }}
              variant="outlined"
            >
              <InputLabel htmlFor={`outlined-adornment-Username`}>
                Username
              </InputLabel>
              <OutlinedInput
                id={`outlined-adornment-Username`}
                type="text"
                label="Username"
                value={username}
                onChange={(e) => setUserName(e.target.value)}
              />
            </FormControl>
            <FormControl
              required
              sx={{ m: 1, width: "60%", minWidth: "300px" }}
              variant="outlined"
            >
              <InputLabel htmlFor={`outlined-adornment-Password`}>
                Password
              </InputLabel>
              <OutlinedInput
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                id={`outlined-adornment-Password`}
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>
          </>
          {/* ---------------------------------------------------- */}
          <Button
            sx={{ width: "60%", margin: "10px", minWidth: "300px" }}
            variant="contained"
            onClick={handleLogin}
          >
            Login
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
            <Button
              variant="outlined"
              onClick={handleLoginWithGoogle}
              startIcon={<GoogleIcon />}
              sx={{ margin: "10px" }}
            >
              Login with Google
            </Button>
            <Typography sx={{ margin: "30px" }}>
              Don't have an account? Sign up here{" "}
              <Button
                onClick={handleSignUp}
                sx={{ textDecoration: "underline" }}
              >
                Sign up
              </Button>
            </Typography>
          </Box>
        </>
      )}
    </Box>
  );
};

export default LoginComponent;
