import dayIcons from "../data/dayIcons";
import nightIcons from "../data/nightIcons";

export const getWeatherIcon = (isDay, code) => {
  if (isDay > 0) {
    const [{ icon }] = dayIcons.filter((icons) => icons.code === code);
    console.log(icon);
    return icon;
  } else {
    const [{ icon }] = nightIcons.filter((icons) => icons.code === code);
    console.log(icon);
    return icon;
  }
};
