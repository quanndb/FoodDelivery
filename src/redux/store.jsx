import { configureStore } from "@reduxjs/toolkit";
import DrawerManagerSlice from "./slices/DrawerManagerSlice";

const store = configureStore({
  reducer: {
    DrawerManager: DrawerManagerSlice.reducer,
  },
});
export default store;
