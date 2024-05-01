import { useRef, useState } from "react";
import { Helmet } from "react-helmet-async";

import {
  Avatar,
  Box,
  Button,
  Container,
  Grid,
  IconButton,
} from "@mui/material";
import CreateRoundedIcon from "@mui/icons-material/CreateRounded";
import { styled } from "@mui/material/styles";

import { DefaultLayout } from "src/layouts";
import TextFiled from "src/components/inputField/TextFiled";
import PasswordFiled from "src/components/inputField/PasswordFiled";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const ProfileContainer = () => {
  const [file, setFile] = useState(null);

  const inputRef = useRef();

  const handleChangeAvatar = (e) => {
    setFile(e.target.files[0]);
    console.log(e.target.files[0]);
    inputRef.current.value = "";
  };

  return (
    <Container>
      <Box
        sx={{
          boxShadow: "0px 10px 15px -3px rgba(0,0,0,0.1)",
          margin: "150px 0px 150px",
          minHeight: "500px",
          backgroundColor: "#fff",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          borderRadius: "10px",
          paddingBottom: "50px",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "-10%",
          }}
        >
          <Avatar
            sx={{
              width: 150,
              height: 150,
            }}
          />

          <IconButton
            component="label"
            sx={{
              width: "50px",
              height: "50px",
              backgroundColor: "#fff",
              borderRadius: "50%",
              padding: "10px",
              boxShadow: "0px 10px 15px -3px rgba(0,0,0,0.1)",
              position: "absolute",
              bottom: "-10%",
              right: "10%",
              cursor: "pointer",
              "&:hover": {
                backgroundColor: "#fff",
                opacity: "0.8",
              },
            }}
          >
            <CreateRoundedIcon color="error"></CreateRoundedIcon>
            <VisuallyHiddenInput
              ref={inputRef}
              type="file"
              onChange={handleChangeAvatar}
            />
          </IconButton>
        </Box>

        <Box
          sx={{
            marginTop: "150px",
            display: "flex",
            flexDirection: "column",
            width: "80%",
          }}
        >
          <Grid container spacing={{ xs: 2 }} columns={{ xs: 4, sm: 8 }}>
            <Grid item xs={4} sm={4}>
              <TextFiled
                label={"Username"}
                disabled={false}
                sx={{ margin: "10px", width: "100%" }}
              />
            </Grid>
            <Grid item xs={4} sm={4}>
              <PasswordFiled
                label={"Password"}
                sx={{ margin: "10px", width: "100%" }}
              />
            </Grid>
            <Grid item xs={4} sm={8}>
              <TextFiled
                label={"Fullname"}
                sx={{ margin: "10px", width: "100%" }}
              />
            </Grid>
            <Grid item xs={4} sm={4}>
              <TextFiled
                label={"Email"}
                sx={{ margin: "10px", width: "100%" }}
              />
            </Grid>
            <Grid item xs={4} sm={4}>
              <TextFiled
                label={"Phone"}
                sx={{ margin: "10px", width: "100%" }}
              />
            </Grid>
            <Grid item xs={4} sm={8}>
              <TextFiled
                label={"Address"}
                sx={{ margin: "10px", width: "100%" }}
              />
            </Grid>
          </Grid>
          <Box sx={{ margin: "auto" }}>
            <Button variant="contained" color="error" sx={{ margin: "20px" }}>
              Update
            </Button>
            <Button variant="outlined" sx={{ margin: "20px" }}>
              Cancel
            </Button>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

const Profile = () => {
  return (
    <>
      <Helmet>
        <title>Profile | FD food</title>
      </Helmet>
      <DefaultLayout unScroll={true}>
        <ProfileContainer />
      </DefaultLayout>
    </>
  );
};

export default Profile;
