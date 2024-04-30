import { useSelector } from "react-redux";

import SideDrawer from "src/components/navigation/SideDrawer";
import { cartDrawer } from "src/redux/selectors/DrawerSelector";
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
