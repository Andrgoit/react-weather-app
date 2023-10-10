import { useSelector } from "react-redux";
import { BsGeoAlt } from "react-icons/bs";
import { ImArrowUp, ImArrowDown } from "react-icons/im";
import { GiWindsock } from "react-icons/gi";
import { WiHumidity } from "react-icons/wi";
import stubIcon from "../../assets/icons/weatherIcons/stubIcon.svg";
import sunriseIcon from "../../assets/icons/weatherIcons/sunrise.svg";
import sunsetIcon from "../../assets/icons/weatherIcons/sunset.svg";

import { motion } from "framer-motion";
//redux
import {
  SelectLocation,
  SelectCurrent,
  SelectForecast,
} from "../../redux/weather/weatherSelectors";

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

  const { name, country } = location;

  const {
    temp_c,
    feelslike_c,
    wind_kph,
    humidity,
    is_day,
    condition: { icon, text, code },
  } = current;

  const {
    astro: { sunrise, sunset },
    day: { mintemp_c, maxtemp_c },
  } = forecast[0];

  //   console.log("location", location);
  //   console.log("current", current);
  // console.log("forecast", forecast);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={animation}
      custom={1}
      className="  rounded-2xl flex flex-col bg-white/20 opacity-10   text-white py-6 px-7"
    >
      <h3>Current weather:</h3>
      <div className="flex flex-col p-3 sm:flex-row gap-20">
        <div className="flex flex-col items-start justify-between">
          <div className="flex gap-3 items-center">
            <BsGeoAlt size={26} />
            <p className=" text-xl font-medium">
              {name}, {country}
            </p>
          </div>
          <div className="flex gap-3 items-center">
            <div
              className=" w-32 h-32 rounded-full"
              style={{
                background: `url(${stubIcon})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
            <p className=" text-7xl">
              {temp_c} <sup>o</sup>
            </p>
          </div>
          <p className=" text-2xl">{text}</p>
        </div>
        {/* другая сторона */}
        <div className="flex w-72 flex-col items-start gap-4">
          <div className="flex gap-3 text-2xl font-medium">
            <p className="text-sky-300">Feels like:</p>
            <p>
              {feelslike_c} <sup>o</sup>
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
                {mintemp_c}
                <sup>o</sup>
              </p>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-sky-300">max: </span>
              <p>
                {maxtemp_c}
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
