import { createAsyncThunk } from "@reduxjs/toolkit";
import weatherFetch from "../../api/weatherApi";

export const fetchWeather = createAsyncThunk(
  "weather/fetchWeather",
  async ({ city, lang }, thunkAPI) => {
    try {
      const data = await weatherFetch(city, lang);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);
