import { Button, Typography, Box } from "@mui/material";
import BasicFields from "./BasicFields";
const SignUp = ({ setIsSignUp, setIsLoading }) => {
  const handleChangeToLogin = () => {
    setIsSignUp(false);
    setIsLoading(true);
  };
  return (
    <Box sx={{ maxHeight: "450px", overflowY: "auto" }}>
      <Typography variant="h4" sx={{ margin: "30px 0", fontWeight: "500" }}>
        Sign up to join us
      </Typography>
      <BasicFields labelUser="UserName" labelPassword="Confirm password">
        <BasicFields labelUser="Email" labelPassword="Password" />
      </BasicFields>
      <Button
        variant="contained"
        sx={{ margin: "20px 0px 30px 0px", width: "60%", minWidth: "300px" }}
      >
        Sign up
      </Button>
      <Typography>
        Already have an account?
        <Button variant="text" onClick={handleChangeToLogin}>
          Login
        </Button>
      </Typography>
      <Typography
        sx={{
          width: "60%",
          frontWeight: "h7",
          marginBottom: "30px",
          padding: 5,
        }}
        variant="caption"
      >
        Việc bạn tiếp tục sử dụng trang web này đồng nghĩa bạn đồng ý với{" "}
        <a href="http://localhost:5173/login">điều khoản sử dụng</a> của chúng
        tôi
      </Typography>
    </Box>
  );
};

export default SignUp;
