import { createSlice } from "@reduxjs/toolkit";

const queryInitialState = {
  autoQuery: "",
};

const autoQuerySlice = createSlice({
  name: "autoQuery",
  initialState: queryInitialState,
  reducers: {
    setAutoQuery(state, action) {
      state.autoQuery = action.payload;
    },
  },
});

export const { setAutoQuery } = autoQuerySlice.actions;

export const autoQueryReducer = autoQuerySlice.reducer;
