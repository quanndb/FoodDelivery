import { useSelector } from "react-redux";
import SideDrawer from "../navigation/SideDrawer";
import { cartDrawer } from "../../../redux/selectors/DrawerSelector";
import EmptycartBackground from "./EmptyCartBackground";

const EmptyCartDrawer = ({ children }) => {
  const open = useSelector(cartDrawer);

  return (
    <SideDrawer open={open} drawer="cart">
      <EmptycartBackground>{children}</EmptycartBackground>
    </SideDrawer>
  );
};

export default EmptyCartDrawer;
