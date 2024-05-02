import { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useDispatch, useSelector } from "react-redux";
import { UserTokenPayLoad, UserData } from "src/redux/selectors/UserSelector";

import {
  Avatar,
  Box,
  Button,
  CircularProgress,
  Container,
  Grid,
  IconButton,
} from "@mui/material";
import CreateRoundedIcon from "@mui/icons-material/CreateRounded";
import { styled } from "@mui/material/styles";

import { DefaultLayout } from "src/layouts";
import TextFiled from "src/components/inputField/TextFiled";
import PasswordFiled from "src/components/inputField/PasswordFiled";
import profileAPI from "src/services/api/profileAPI";
import { decodeAccessToken } from "src/utils/jwt-decode";
import UserManagerSlice from "src/redux/slices/UserManagerSlice";

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

  const [loading, setLoading] = useState(false);

  const user = useSelector(UserTokenPayLoad);
  const userDetail = useSelector(UserData);

  const dispatch = useDispatch();

  const inputRef = useRef();

  const handleChangeAvatar = (e) => {
    const input = e.target.files[0];

    input.preview = URL.createObjectURL(input);

    setFile(input);
  };

  useEffect(() => {
    return () => {
      file && URL.revokeObjectURL(file.preview);
    };
  }, [file]);

  useEffect(() => {
    const getUserProfile = async () => {
      await profileAPI
        .getProfile(`/profile?un=${decodeAccessToken().sub}`, {
          "Content-type": "application/json",
          headers: { Authorization: `Bearer ${localStorage.accessToken}` },
        })
        .then((res) => dispatch(UserManagerSlice.actions.setUserInfo(res)))
        .catch((error) => console.log(error));
    };
    getUserProfile();
  }, []);

  const handleUpdate = async () => {
    const payload = decodeAccessToken();
    setLoading(true);

    const formData = new FormData();
    formData.append("file", file);
    formData.append("username", payload.sub);

    await profileAPI
      .updateProfile(formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${localStorage.accessToken}`,
        },
      })
      .then((data) => {
        const tempUser = { ...user };
        tempUser.picture = `${data.avatar}`;
        dispatch(UserManagerSlice.actions.setUserToken(tempUser));
      })
      .catch((error) => console.log(error))
      .finally(() => {
        setLoading(false);
      });
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
        <>
          {loading ? (
            <CircularProgress />
          ) : (
            <>
              {" "}
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
                  src={file ? file.preview : user.picture ? user.picture : ""}
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
                      value={userDetail.username ? userDetail.username : ""}
                      disabled={true}
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
                      value={userDetail.fullName ? userDetail.fullName : ""}
                      sx={{ margin: "10px", width: "100%" }}
                    />
                  </Grid>
                  <Grid item xs={4} sm={4}>
                    <TextFiled
                      label={"Email"}
                      value={userDetail.email ? userDetail.email : ""}
                      sx={{ margin: "10px", width: "100%" }}
                    />
                  </Grid>
                  <Grid item xs={4} sm={4}>
                    <TextFiled
                      label={"Phone"}
                      value={userDetail.phone ? userDetail.phone : ""}
                      sx={{ margin: "10px", width: "100%" }}
                    />
                  </Grid>
                  <Grid item xs={4} sm={8}>
                    <TextFiled
                      label={"Address"}
                      value={userDetail.address ? userDetail.address : ""}
                      sx={{ margin: "10px", width: "100%" }}
                    />
                  </Grid>
                </Grid>
                <Box sx={{ margin: "auto" }}>
                  <Button
                    variant="contained"
                    color="error"
                    sx={{ margin: "20px" }}
                    onClick={handleUpdate}
                  >
                    Update
                  </Button>
                  <Button variant="outlined" sx={{ margin: "20px" }}>
                    Cancel
                  </Button>
                </Box>
              </Box>
            </>
          )}
        </>
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
