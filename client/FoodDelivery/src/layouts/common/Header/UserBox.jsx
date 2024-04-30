import { useContext } from "react";
import { useDispatch } from "react-redux";
import { jwtDecode } from "jwt-decode";

import { Avatar, Box, Typography } from "@mui/material";

import { AuthContext } from "src/context/AuthProvider";
import DrawerManagerSlice from "src/redux/slices/DrawerManagerSlice";

const UserBox = () => {
  const dispatch = useDispatch();

  const {
    user: { uid, photoURL, auth },
  } = useContext(AuthContext);

  const handleOpenUserDrawer = () => {
    dispatch(DrawerManagerSlice.actions.setOpenUserDrawer(true));
  };

  const accessToken = localStorage.accessToken;
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          cursor: "pointer",
          padding: "5px 5px",
          backgroundColor: "#eee",
          borderRadius: "65px",
          opacity: "0.8",
          "&:hover": { opacity: "0.6" },
        }}
        onClick={handleOpenUserDrawer}
      >
        <Avatar
          alt="avata"
          src={accessToken ? jwtDecode(accessToken).picture : null}
          onClick={handleOpenUserDrawer}
          sx={{
            width: "40px",
            height: "40px",
            border: "solid 1px #f0f0f0dd",
            margin: "0px 10px 0px 0px",
            cursor: "pointer",
            "&:hover": {
              opacity: "0.7",
            },
          }}
        />
        <Typography variant="h6" paddingRight={"10px"} color={"error"}>
          {accessToken ? jwtDecode(accessToken).name : <></>}
        </Typography>
      </Box>
    </>
  );
};

export default UserBox;
