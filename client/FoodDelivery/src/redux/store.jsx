import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import DrawerManagerSlice from "./slices/DrawerManagerSlice";
import UserManagerSlice from "./slices/UserManagerSlice";

const rootReducer = combineReducers({
  DrawerManager: DrawerManagerSlice.reducer,
  UserInfo: UserManagerSlice.reducer,
});

const persistedReducer = persistReducer({ key: "root", storage }, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
