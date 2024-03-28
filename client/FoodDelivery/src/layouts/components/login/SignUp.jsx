import { Button, Typography, Box } from "@mui/material";
import BasicFields from "./BasicFields";
const SignUp = ({ setIsSignUp, setIsLoading }) => {
  const handleChangeToLogin = () => {
    setIsSignUp(false);
    setIsLoading(true);
  };
  return (
    <Box sx={{ overflowY: "auto" }}>
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
      <Box sx={{ width: "80%", margin: "auto", height: "70px" }}>
        <Typography
          sx={{ marginBottom: "50px" }}
          variant="caption"
          textAlign={"center"}
        >
          Việc bạn tiếp tục sử dụng trang web này đồng nghĩa bạn đồng ý với{" "}
          <a href="/">điều khoản sử dụng</a> của chúng tôi
        </Typography>
      </Box>
    </Box>
  );
};

export default SignUp;
