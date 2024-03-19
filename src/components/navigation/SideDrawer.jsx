import { Drawer, Box } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch, useSelector } from "react-redux";
import DrawerManagerSlice from "../../redux/slices/DrawerManagerSlice";
import { cartDrawer } from "../../redux/selectors/DrawerSelector";

function SideDrawer({ children, open, drawer }) {
  const dispatch = useDispatch();

  const handleCloseDrawer = () => {
    switch (drawer) {
      case "cart": {
        dispatch(DrawerManagerSlice.actions.setOpenCartDrawer(false));
      }
      case "user": {
        dispatch(DrawerManagerSlice.actions.setOpenUserDrawer(false));
      }
      default: {
      }
    }
  };

  const DrawerList = (
    <Box
      sx={{ width: "40vw", display: "flex", height: "100%" }}
      role="presentation"
    >
      <CloseIcon
        sx={{
          position: "absolute",
          top: "10px",
          left: "10px",
          cursor: "pointer",
        }}
        color="error"
        onClick={handleCloseDrawer}
      />

      <Box display={"flex"} width={"100%"} justifyContent={"center"}>
        {children}
      </Box>
    </Box>
  );

  return (
    <>
      <Drawer anchor={"right"} open={open} onClose={handleCloseDrawer}>
        {DrawerList}
      </Drawer>
    </>
  );
}

export default SideDrawer;
