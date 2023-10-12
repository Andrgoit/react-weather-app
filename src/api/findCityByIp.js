import axios from "axios";
const apiKey = process.env.REACT_APP_API_KEY;

const findCityByIp = async () => {
  const { data } = await axios.get(
    `https://api.weatherapi.com/v1/ip.json?key=${apiKey}&q=auto:ip`
  );
  return data;
};

export default findCityByIp;
