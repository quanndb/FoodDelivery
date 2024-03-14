import { Avatar, Box, Menu, MenuItem, Typography } from "@mui/material";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthProvider";

const UserBox = () => {
  const [anchorElement, setAnchorElement] = useState(null);
  const open = Boolean(anchorElement);
  const {
    user: { uid, displayName, photoURL, auth },
  } = useContext(AuthContext);

  const handleLogout = () => {
    auth.signOut().then(() => {});
  };
  const handleClose = () => {
    setAnchorElement(null);
  };
  const handleOpen = (e) => {
    setAnchorElement(e.currentTarget);
  };
  return (
    <>
      <Box sx={{ display: "flex" }} onClick={handleOpen}>
        <Typography>{displayName}</Typography>
        <Avatar
          alt="avata"
          src={photoURL}
          sx={{ width: "24px", height: "24px", marginLeft: "5px" }}
        />
      </Box>
      <Menu open={open} onClose={handleClose} anchorEl={anchorElement}>
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </>
  );
};

export default UserBox;
