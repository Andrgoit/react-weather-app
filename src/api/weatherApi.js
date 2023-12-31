import axios from "axios";

const apiKey = process.env.REACT_APP_API_KEY;

const weatherFetch = async (city, lang) => {
  const { data } = await axios.get(
    `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=3&lang=${lang}`
  );
  return data;
};

export default weatherFetch;
