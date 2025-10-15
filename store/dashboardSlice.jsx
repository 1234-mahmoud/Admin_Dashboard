'use client';

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  show: false,
  mode: false,
  settings: false,
  user_profile: false,
}

export const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    // Toggle show
    toggleShow: (state) => {
      state.show = !state.show
    },
    // Toggle mode
    toggleMode: (state) => {
      state.mode = !state.mode;
    },
    // Toggle Settings
    toggleSettings: (state) => {
      state.settings = !state.settings
    },
    // Toggle User Profile
    toggleUserProfile: (state) => {
      state.user_profile = !state.user_profile
    }
  }
});

export const {
  toggleShow,
  toggleMode,
  toggleSettings,
  toggleUserProfile,
} = dashboardSlice.actions;

export default dashboardSlice.reducer;
