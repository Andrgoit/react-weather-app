import { createSlice } from "@reduxjs/toolkit";
import { fetchWeather } from "./weatherOperations";
import { toast } from "react-toastify";

const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    items: {},
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchWeather.pending](state) {
      state.isLoading = true;
    },
    [fetchWeather.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchWeather.rejected](state, action) {
      state.isLoading = false;
      state.error = action.error;
      toast.error(`Sorry, but city ${action.meta.arg} not found`);
    },
  },
});
export const weatherReducer = weatherSlice.reducer;
