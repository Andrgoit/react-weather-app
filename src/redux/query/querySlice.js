import { createSlice } from "@reduxjs/toolkit";

const queryInitialState = {
  query: "",
};

const querySlice = createSlice({
  name: "query",
  initialState: queryInitialState,
  reducers: {
    setQuery(state, action) {
      state.query = action.payload;
    },
  },
});

export const { setQuery } = querySlice.actions;

export const queryReducer = querySlice.reducer;
