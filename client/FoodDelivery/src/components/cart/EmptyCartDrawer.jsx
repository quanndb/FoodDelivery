import { Box, Button, Typography } from "@mui/material";
import "./index.css";
import EastIcon from "@mui/icons-material/East";
import { useDispatch, useSelector } from "react-redux";
import DrawerManagerSlice from "../../redux/slices/DrawerManagerSlice";
import SideDrawer from "../navigation/SideDrawer";
import { cartDrawer } from "../../redux/selectors/DrawerSelector";

const EmptyCart = () => {
  const dispatch = useDispatch();

  const open = useSelector(cartDrawer);

  const handleCloseDrawer = () => {
    dispatch(DrawerManagerSlice.actions.setOpenCartDrawer(false));
  };
  return (
    <SideDrawer open={open} drawer="cart">
      <Box
        sx={{
          alignSelf: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box className="emptyCart"></Box>
        <Typography variant="h5" textAlign={"center"}>
          Oops! Your cart is empty
        </Typography>
        <Typography marginTop={"10px"} textAlign={"center"}>
          Let's add some foods to your cart and start order now.
        </Typography>
        <Button
          color="error"
          sx={{ marginTop: "20px" }}
          endIcon={<EastIcon />}
          onClick={handleCloseDrawer}
        >
          Countinue shopping
        </Button>
      </Box>
    </SideDrawer>
  );
};

export default EmptyCart;
