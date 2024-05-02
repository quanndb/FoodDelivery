import { createSlice } from "@reduxjs/toolkit";

const UserManagerSlice = createSlice({
  name: "UserInfo",
  initialState: { data: {}, tokenPayload: {} },
  reducers: {
    setUserInfo(state, action) {
      state.data = action.payload;
    },
    setUserToken(state, action) {
      state.tokenPayload = action.payload;
    },
  },
});
export default UserManagerSlice;
