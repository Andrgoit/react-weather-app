import { useSelector } from "react-redux";
import { SelectIsCelsius } from "../../redux/setting/settingSelectors";
import { BsGeoAlt } from "react-icons/bs";
import { GiWindsock } from "react-icons/gi";
import { WiHumidity } from "react-icons/wi";

import sunriseIcon from "../../assets/icons/weatherIcons/sunrise.svg";
import sunsetIcon from "../../assets/icons/weatherIcons/sunset.svg";

import { motion } from "framer-motion";

import {
  SelectLocation,
  SelectCurrent,
  SelectForecast,
} from "../../redux/weather/weatherSelectors";

import { getWeatherIcon } from "../../utils/getWeatherIcon";

const animation = {
  hidden: { x: -100, opacity: 0 },
  visible: (custom) => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.2 },
  }),
};

export default function Current() {
  const location = useSelector(SelectLocation);
  const current = useSelector(SelectCurrent);
  const forecast = useSelector(SelectForecast);
  const isCelsius = useSelector(SelectIsCelsius);

  const { name, country } = location;

  const {
    temp_c,
    temp_f,
    feelslike_c,
    feelslike_f,
    wind_kph,
    humidity,
    is_day,
    condition: { text, code },
  } = current;

  const {
    astro: { sunrise, sunset },
    day: { mintemp_c, maxtemp_c, mintemp_f, maxtemp_f },
  } = forecast[0];

  // const temp = {` isCelsius ? temp_c: temp_f`};

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={animation}
      custom={1}
      className="rounded-2xl flex flex-col max-w-[320px] sm:max-w-[640px] bg-black/40 text-white p-3"
    >
      <h3>Current weather:</h3>
      <div className="flex flex-col pt-3 sm:flex-row gap-5 justify-between">
        <div className="flex flex-col items-start justify-between">
          <div className="flex gap-3 items-center">
            <BsGeoAlt size={26} />
            <p className=" text-xl font-medium">
              {name}, {country}
            </p>
          </div>
          <div className="flex gap-3 items-center">
            <div
              className=" w-32 h-32"
              style={{
                background: `url(${getWeatherIcon(is_day, code)})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
            <p className=" text-6xl">
              {isCelsius ? temp_c : temp_f} <sup>o</sup>
            </p>
          </div>
          <p className=" text-2xl">{text}</p>
        </div>
        {/* другая сторона */}
        <div className="flex w-72 flex-col items-center sm:items-start gap-4">
          <div className="flex gap-3 text-2xl font-medium">
            <p className="text-sky-300">Feels like:</p>
            <p>
              {isCelsius ? feelslike_c : feelslike_f} <sup>o</sup>
            </p>
          </div>
          <div className="flex gap-3  items-center">
            <div
              className=" w-12 h-12"
              style={{
                background: `url(${sunriseIcon})`,
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
            <div>{sunrise}</div>
            <div
              className=" w-12 h-12"
              style={{
                background: `url(${sunsetIcon})`,
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
            <div>{sunset}</div>
          </div>

          <div className="flex gap-7  text-2xl">
            <div className="flex items-center gap-2">
              <span className="text-sky-300">min: </span>
              <p>
                {isCelsius ? mintemp_c : mintemp_f}
                <sup>o</sup>
              </p>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-sky-300">max: </span>
              <p>
                {isCelsius ? maxtemp_c : maxtemp_f}
                <sup>o</sup>
              </p>
            </div>
          </div>
          <div className="flex items-center  text-2xl gap-2">
            <GiWindsock size={36} />
            <span className="text-sky-300">Wind: </span>
            <p> {wind_kph} km/h</p>
          </div>
          <div className="flex items-center  text-2xl gap-2">
            <WiHumidity size={36} />{" "}
            <span className="text-sky-300">Humidity: </span>
            <p>{humidity}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
