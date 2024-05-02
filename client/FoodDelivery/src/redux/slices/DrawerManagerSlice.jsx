import { createSlice } from "@reduxjs/toolkit";

const DrawerManagerSlice = createSlice({
  name: "DrawerManager",
  initialState: { cartDrawerOpen: false, userDrawerOpen: false },
  reducers: {
    setOpenCartDrawer(state, action) {
      state.cartDrawerOpen = action.payload;
    },
    setOpenUserDrawer(state, action) {
      state.userDrawerOpen = action.payload;
    },
  },
});
export default DrawerManagerSlice;
