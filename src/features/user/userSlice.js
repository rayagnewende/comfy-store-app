/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
const themes = {
  winter: "winter",
  dracula: "dracula",
};

const getUserLocalStorage = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const getThemeFromLocalStorage = () => {
  const theme = localStorage.getItem("theme") || themes.winter;
  document.documentElement.setAttribute("data-theme", theme);
  return theme;
};

const initialState = {
  user: getUserLocalStorage(),
  theme: getThemeFromLocalStorage(),
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      const user = { ...action.payload.user, token: action.payload.jwt };
      state.user = user;
      localStorage.setItem("user", JSON.stringify(state.user));
    },
    logoutUser: (state, action) => {
      console.log("logout");
      state.user = null;
      localStorage.removeItem("user");
      toast.success("User logged successfully!");
    },
    toggleTheme: (state) => {
      const { dracula, winter } = themes;
      state.theme = state.theme === dracula ? winter : dracula;
      document.documentElement.setAttribute("data-theme", state.theme);
      localStorage.setItem("theme", state.theme);
    },
  },
});

export const { loginUser, logoutUser, toggleTheme } = userSlice.actions;

export default userSlice.reducer;
