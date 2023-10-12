import { createSlice } from "@reduxjs/toolkit";
import { fetchCityes } from "./cityesOperations";
import { toast } from "react-toastify";

const cityesSlice = createSlice({
  name: "cityes",
  initialState: {
    cityes: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    resetCityes(state, _) {
      state.cityes = [];
    },
  },
  extraReducers: {
    [fetchCityes.pending](state) {
      state.isLoading = true;
    },
    [fetchCityes.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.cityes = action.payload;
    },
    [fetchCityes.rejected](state, action) {
      state.isLoading = false;
      state.error = action.error;
      toast.error(`Sorry, but city ${action.meta.arg} not found`);
    },
  },
});
export const cityesReducer = cityesSlice.reducer;

export const { resetCityes } = cityesSlice.actions;
