import {
  Box,
  Divider,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import SideDrawer from "../navigation/SideDrawer";
import { useDispatch, useSelector } from "react-redux";
import { userDrawer } from "src/redux/selectors/DrawerSelector";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import ExitToAppRoundedIcon from "@mui/icons-material/ExitToAppRounded";
import { auth } from "src/firebase/config";
import { useNavigate } from "react-router-dom";
import DrawerManagerSlice from "src/redux/slices/DrawerManagerSlice";

const UserMenuDrawer = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const open = useSelector(userDrawer);

  const handleLogout = () => {
    auth.signOut().then(() => {});
  };

  const handleGoToOrder = () => {
    dispatch(DrawerManagerSlice.actions.setOpenUserDrawer(false));
    navigate("/order");
  };

  return (
    <SideDrawer open={open} drawer="user">
      <Box sx={{ marginTop: "50px", width: "100%" }}>
        <Divider />
        <List>
          <ListItemButton onClick={handleGoToOrder}>
            <ListItemIcon>
              <ShoppingCartOutlinedIcon />
            </ListItemIcon>
            <ListItemText color="primary" primary="Go to your order" />
          </ListItemButton>

          <ListItemButton onClick={handleLogout}>
            <ListItemIcon>
              <ExitToAppRoundedIcon color="error" />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItemButton>
        </List>
      </Box>
    </SideDrawer>
  );
};

export default UserMenuDrawer;
