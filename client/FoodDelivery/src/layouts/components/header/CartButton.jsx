import { IconButton } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useDispatch } from "react-redux";
import DrawerManagerSlice from "../../../redux/slices/DrawerManagerSlice";

const CartButton = () => {
  const dispatch = useDispatch();

  const handleOpenCart = () => {
    dispatch(DrawerManagerSlice.actions.setOpenCartDrawer(true));
  };

  return (
    <IconButton
      sx={{
        margin: "10px",
        backgroundColor: "#f0f0f0dd",
        "&:hover": { backgroundColor: "#e9e9e9dd" },
      }}
      aria-label="open cart"
      color="primary"
      onClick={handleOpenCart}
    >
      <ShoppingCartOutlinedIcon color="error" />
    </IconButton>
  );
};

export default CartButton;
