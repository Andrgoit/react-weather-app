import { createSlice } from "@reduxjs/toolkit";

const settingInitialState = {
  isCelsius: true,
};

const settingSlice = createSlice({
  name: "setting",

  initialState: settingInitialState,

  reducers: {
    toggleCelsius(state, _) {
      state.isCelsius = !state.isCelsius;
    },
  },
});

export const { toggleCelsius } = settingSlice.actions;

export const settingReducer = settingSlice.reducer;
