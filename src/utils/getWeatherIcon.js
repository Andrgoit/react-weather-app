import dayIcons from "../data/dayIcons";
import nightIcons from "../data/nightIcons";

export const getWeatherIcon = (isDay, code) => {
  if (isDay) {
    const [{ icon }] = dayIcons.filter((icons) => icons.code === code);
    return icon;
  } else {
    const [{ icon }] = nightIcons.filter((icons) => icons.code === code);
    return icon;
  }
};
