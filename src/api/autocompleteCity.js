import axios from "axios";
const apiKey = process.env.REACT_APP_API_KEY;

const autocompleteCity = async (city) => {
  const { data } = await axios.get(
    `https://api.weatherapi.com/v1/search.json?key=${apiKey}&q=${city}`
  );
  return data;
};

export default autocompleteCity;
