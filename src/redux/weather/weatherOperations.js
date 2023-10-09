import { createAsyncThunk } from "@reduxjs/toolkit";
import weatherFetch from "../../api/weatherApi";

export const fetchWeather = createAsyncThunk(
  "weather/fetchWeather",
  async (city, thunkAPI) => {
    const data = await weatherFetch(city);
    return data;
  }
);
