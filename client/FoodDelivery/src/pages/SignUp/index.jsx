import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { Button, Typography, Box } from "@mui/material";

import { AuthLayout } from "src/layouts";
import PasswordFiled from "src/components/inputField/PasswordFiled";
import TextFiled from "src/components/inputField/TextFiled";
import authAPI from "src/services/api/authAPI";

const SignUpContent = () => {
  const [fullname, setFullname] = useState("");

  const [username, setUsername] = useState("");

  const [password, setPassword] = useState("");

  const [cfpassword, setCFPassword] = useState("");

  const navigate = useNavigate();

  const handleChangeToLogin = () => {
    navigate("/login");
  };

  const handleSignUp = async () => {
    if (password === cfpassword) {
      await authAPI
        .register({
          username: username,
          password: password,
          fullName: fullname,
        })
        .then((res) => {
          navigate("/login");
          alert(res);
        })
        .catch((error) => {
          alert(error.response.data);
        });
    } else {
      alert("Confirm password does not match");
    }
  };

  return (
    <Box
      sx={{
        overflowY: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "30px",
      }}
    >
      <Typography variant="h4" sx={{ margin: "30px 0", fontWeight: "500" }}>
        Sign up to join us
      </Typography>
      <TextFiled
        label={"Fullname"}
        value={fullname}
        setValue={setFullname}
        sx={{ margin: " 10px 0px" }}
      />
      <TextFiled
        label={"Username"}
        value={username}
        setValue={setUsername}
        sx={{ margin: " 10px 0px" }}
      />
      <PasswordFiled
        label={"Password"}
        value={password}
        setValue={setPassword}
        sx={{ margin: " 10px 0px" }}
      />
      <PasswordFiled
        label={"Confirm password"}
        value={cfpassword}
        setValue={setCFPassword}
        sx={{ margin: " 10px 0px 30px 0px" }}
      />
      <Button
        variant="contained"
        sx={{ marginBottom: "30px" }}
        onClick={handleSignUp}
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

const SignUp = ({}) => {
  return (
    <>
      <Helmet>
        <title>Signup | FD food</title>
      </Helmet>

      <AuthLayout>
        <SignUpContent />
      </AuthLayout>
    </>
  );
};

export default SignUp;
