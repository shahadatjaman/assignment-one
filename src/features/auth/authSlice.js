import { createSlice } from "@reduxjs/toolkit";
import LocalStorageManager from "../../utils/LocalStorageManager";

const initialState = {
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userLoggedIn: (state, { payload }) => {
      const { user, accessToken } = payload;
      state.user = user;

      const storage = new LocalStorageManager();
      storage.setItem("accessToken", accessToken);
    },
    getUser: (state, { payload }) => {
      const { user } = payload;

      state.user = user;
    },

    userLoggedOut: (state) => {
      state.accessToken = null;
      state.user = null;

      const storage = new LocalStorageManager();

      storage.removeItem("accessToken");
    },
  },
});

export const { userLoggedIn, getUser, userLoggedOut } = authSlice.actions;
export default authSlice.reducer;
