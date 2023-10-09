import { BsGeoAlt } from "react-icons/bs";
import { ImArrowUp, ImArrowDown } from "react-icons/im";
import { GiWindsock } from "react-icons/gi";
import { WiHumidity } from "react-icons/wi";
import stubIcon from "../../assets/icons/weatherIcons/stubIcon.svg";
import sunriseIcon from "../../assets/icons/weatherIcons/sunrise.svg";
import sunsetIcon from "../../assets/icons/weatherIcons/sunset.svg";

import { motion } from "framer-motion";

const animation = {
  hidden: { y: -100, opacity: 0 },
  visible: (custom) => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 0.2 },
  }),
};

export default function Current({
  location = {},
  current = {},
  forecast = [],
}) {
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
  } = forecast;

  //   console.log("location", location);
  //   console.log("current", current);
  //   console.log("forecast", forecast);
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={animation}
      custom={1}
      className=" absolute z-10 top-1/3 left-1/3 rounded-xl flex flex-col bg-gradient-to-tr opacity-80 from-sky-700 to-indigo-400 text-white py-6 px-7"
    >
      <h3>Current weather:</h3>
      <div className="flex flex-col p-3 sm:flex-row gap-5">
        <div>
          <div className="flex gap-3 items-center">
            <BsGeoAlt size={26} />
            <p className=" text-xl font-medium">
              {name}, {country}
            </p>
          </div>
          <div className="flex gap-3 items-center">
            <div
              className=" w-[400px] h-[350px]"
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
        <div>
          <div className="flex gap-3 text-2xl">
            <p>Feels like:</p>
            <p>
              {feelslike_c} <sup>o</sup>
            </p>
          </div>
          <div className="flex gap-3 items-center">
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

          <div className="flex gap-7 text-2xl">
            <div className="flex items-center gap-2">
              <ImArrowDown size={26} />
              <p>{mintemp_c}</p>
            </div>

            <div className="flex items-center gap-2">
              <ImArrowUp size={26} />
              <p>{maxtemp_c}</p>
            </div>
          </div>
          <div className="flex text-2xl">
            <GiWindsock size={26} />
            <p>{wind_kph}</p>
          </div>
          <div className="flex text-2xl">
            <WiHumidity size={36} />
            <p>{humidity}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
