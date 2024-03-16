import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "login",
  initialState: { userName: "", password: "" },
  reducers: {
    setUser(state, action) {
      state = action.payload;
    },
    setPassword(state, action) {
      state = action.payload;
    },
  },
});
export default loginSlice;
