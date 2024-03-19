import { Button, Typography, Box } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import { auth } from "../../firebase/config";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import BasicFileds from "./BasicFields";

const LoginComponent = ({ setIsSignUp, setIsLoading }) => {
  const handleLoginWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    const res = await signInWithPopup(auth, provider);
    console.log(res);
  };

  const handleSignUp = () => {
    setIsSignUp(true);
    setIsLoading(true);
  };

  return (
    <Box
      sx={{
        maxHeight: "450px",
        overflowY: "auto",
      }}
    >
      <Typography variant="h4" sx={{ margin: "30px 0px", fontWeight: "500" }}>
        Welcome to Food Delivery App
      </Typography>
      <BasicFileds labelUser="Email" labelPassword="Password" />
      <Button
        sx={{ width: "60%", margin: "10px", minWidth: "300px" }}
        variant="contained"
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
          <Button onClick={handleSignUp} sx={{ textDecoration: "underline" }}>
            Sign up
          </Button>
        </Typography>
      </Box>
    </Box>
  );
};

export default LoginComponent;
