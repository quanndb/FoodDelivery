import { Avatar, Box, Menu, MenuItem, Typography } from "@mui/material";
import { useContext, useState } from "react";
import { AuthContext } from "../../../context/AuthProvider";
import { useDispatch } from "react-redux";
import DrawerManagerSlice from "../../../redux/slices/DrawerManagerSlice";

const UserBox = () => {
  const dispatch = useDispatch();

  const {
    user: { uid, photoURL, auth },
  } = useContext(AuthContext);

  const handleOpenUserDrawer = () => {
    dispatch(DrawerManagerSlice.actions.setOpenUserDrawer(true));
  };
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Avatar
          alt="avata"
          src={photoURL}
          onClick={handleOpenUserDrawer}
          sx={{
            width: "40px",
            height: "40px",
            border: "solid 1px #f0f0f0dd",
            margin: "0px 10px 0px 10px",
            cursor: "pointer",
            "&:hover": {
              opacity: "0.7",
            },
          }}
        />
      </Box>
    </>
  );
};

export default UserBox;
