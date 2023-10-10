import { useSelector } from "react-redux";
import { SelectForecast } from "../../redux/weather/weatherSelectors";
import { motion } from "framer-motion";
import weekDay from "../../hooks/weekDay";

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
  const newForecast = forecast.slice(1);

  const elements = newForecast.map(
    ({
      date,
      day: {
        maxtemp_c,
        mintemp_c,
        condition: { code, text },
      },
    }) => (
      <li key={date} className="text-2xl flex flex-col gap-4 items-center">
        <p>{weekDay(date)}</p>
        <p>{text}</p>
        <p>
          {mintemp_c}
          <sup>o </sup>/ {maxtemp_c}
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
      className=" bg-white/20 text-white py-6 px-7 rounded-xl"
    >
      <h3>Extended forecast:</h3>
      <ul className="  flex flex-col gap-8 sm:flex-row p-3 ">{elements}</ul>
    </motion.div>
  );
}
