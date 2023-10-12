import { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { fetchWeather } from "./redux/weather/weatherOperations";
import { SelectLocation } from "./redux/weather/weatherSelectors";
import { SelectQuery } from "./redux/query/querySelectors";

import { ImageBg, Header, Current, Forecast, Banner } from "./components";

function App() {
  const city = useSelector(SelectQuery);
  const location = useSelector(SelectLocation);
  const dispatch = useDispatch();

  useEffect(() => {
    if (city) {
      dispatch(fetchWeather(city));
    }
  }, [city, dispatch]);

  return (
    <ImageBg>
      <Header />
      {location ? (
        <div className="flex flex-col gap-6 items-center">
          <Current />
          <Forecast />
        </div>
      ) : (
        <Banner />
      )}
    </ImageBg>
  );
}

export default App;
