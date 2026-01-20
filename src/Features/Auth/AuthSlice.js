import { createSlice } from "@reduxjs/toolkit";

const savedUser = JSON.parse(localStorage.getItem("authUser"));

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: savedUser || null,
  },
  reducers: {
    loginSuccess(state, action) {
      state.user = action.payload;
      localStorage.setItem("authUser", JSON.stringify(action.payload));
    },
    logout(state) {
      state.user = null;
      localStorage.removeItem("authUser");
    },
  },
});

export const { loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;
