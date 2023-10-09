import { createSlice } from "@reduxjs/toolkit";

const settingInitialState = {
  staticBg: true,
};

const settingSlice = createSlice({
  name: "setting",

  initialState: settingInitialState,

  reducers: {
    toggleStaticBg(state, _) {
      state.staticBg = !state.staticBg;
    },
  },
});

export const { toggleStaticBg } = settingSlice.actions;

export const settingReducer = settingSlice.reducer;
