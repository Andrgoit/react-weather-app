import { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { fetchWeather } from "./redux/weather/weatherOperations";
import { SelectLocation } from "./redux/weather/weatherSelectors";
import { SelectQuery } from "./redux/query/querySelectors";
import { SelectLang } from "./redux/setting/settingSelectors";

import { ImageBg, Header, Current, Forecast } from "./components";

function App() {
  const city = useSelector(SelectQuery);
  const location = useSelector(SelectLocation);
  const lang = useSelector(SelectLang);
  const dispatch = useDispatch();

  useEffect(() => {
    if (city) {
      dispatch(fetchWeather({ city, lang }));
    }
  }, [city, dispatch, lang]);

  return (
    <ImageBg>
      <Header />
      {location && (
        <div className="flex flex-col gap-6 items-center">
          <Current />
          <Forecast />
        </div>
      )}
    </ImageBg>
  );
}

export default App;
