import { createAsyncThunk } from "@reduxjs/toolkit";
import autocompleteCity from "../../api/autocompleteCity";

export const fetchCityes = createAsyncThunk(
  "cityes/fetchCityes",
  async (city, thunkAPI) => {
    const data = await autocompleteCity(city);

    return data;
  }
);
