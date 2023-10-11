import dayIcons from "../data/dayIcons";

export const forecastGetWeatherIcon = (code) => {
  const [{ icon }] = dayIcons.filter((icons) => icons.code === code);

  return icon;
};
