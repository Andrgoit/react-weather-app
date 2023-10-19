import { useSelector } from "react-redux";
import { SelectForecast } from "../../redux/weather/weatherSelectors";
import { SelectIsCelsius } from "../../redux/setting/settingSelectors";

import weekDay from "../../utils/getWeekDay";
import { forecastGetWeatherIcon } from "../../utils/forecastGetWeatherIcon";

import { motion } from "framer-motion";

const animation = {
  hidden: { x: 100, opacity: 0 },
  visible: (custom) => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.2 },
  }),
};

export default function Forecast() {
  const forecast = useSelector(SelectForecast);
  const isCelsius = useSelector(SelectIsCelsius);
  const newForecast = forecast.slice(1);

  const elements = newForecast.map(
    ({
      date,
      day: {
        maxtemp_c,
        mintemp_c,
        maxtemp_f,
        mintemp_f,
        condition: { code, text },
      },
    }) => (
      <li
        key={date}
        className="text-2xl max-w-full flex flex-col gap-4 items-center border-white first:border-b-[1px] sm:max-w-xs sm:first:border-b-0 p-3"
      >
        <p>{weekDay(date)}</p>
        <div
          className=" w-32 h-32"
          style={{
            background: `url(${forecastGetWeatherIcon(code)})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <p>{text}</p>
        <p>
          {isCelsius ? mintemp_c : mintemp_f}
          <sup>o </sup>/{isCelsius ? maxtemp_c : maxtemp_f}
          <sup>o</sup>
        </p>
      </li>
    )
  );

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={animation}
      custom={1}
      className=" bg-black/40 text-white p-3 rounded-xl"
    >
      <h3>Extended forecast:</h3>
      <ul className="flex flex-col max-w-xs sm:max-w-full sm:flex-row sm:gap-4">
        {elements}
      </ul>
    </motion.div>
  );
}
