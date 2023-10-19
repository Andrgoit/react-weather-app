import { createSlice } from "@reduxjs/toolkit";

const settingInitialState = {
  isCelsius: true,
  lang: "en",
};

const settingSlice = createSlice({
  name: "setting",

  initialState: settingInitialState,

  reducers: {
    toggleCelsius(state, _) {
      state.isCelsius = !state.isCelsius;
    },
    changeLang(state, { payload }) {
      state.lang = payload;
    },
  },
});

export const { toggleCelsius, changeLang } = settingSlice.actions;

export const settingReducer = settingSlice.reducer;
