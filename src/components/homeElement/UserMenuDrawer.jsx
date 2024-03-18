import {
  Box,
  Divider,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import SideDrawer from "../navigation/SideDrawer";
import { useSelector } from "react-redux";
import { userDrawer } from "../../redux/selectors/DrawerSelector";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import ExitToAppRoundedIcon from "@mui/icons-material/ExitToAppRounded";
import { auth } from "../../firebase/config";

const UserMenuDrawer = () => {
  const open = useSelector(userDrawer);

  const handleLogout = () => {
    auth.signOut().then(() => {});
  };

  return (
    <SideDrawer open={open} drawer="user">
      <Box sx={{ marginTop: "50px", width: "100%" }}>
        <Divider />
        <List>
          <ListItemButton>
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
