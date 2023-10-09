import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleStaticBg } from "./redux/setting/settingSlice";
import { fetchWeather } from "./redux/weather/weatherOperations";
import {
  SelectLocation,
  SelectCurrent,
  SelectForecast,
} from "./redux/weather/weatherSelectors";

import { VideoBg, ImageBg, Header, Banner, Current } from "./components";
import ModalWindow from "./components/Modal/Modal";

function App() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const staticBg = useSelector((store) => store.setting.staticBg);
  const city = useSelector((store) => store.query.query);
  const location = useSelector(SelectLocation);
  const current = useSelector(SelectCurrent);
  const forecast = useSelector(SelectForecast);
  const dispatch = useDispatch();

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  function staticBackground() {
    dispatch(toggleStaticBg());
  }
  useEffect(() => {
    if (city) {
      dispatch(fetchWeather(city));
    }
  }, [city, dispatch]);

  return (
    <div className=" w-full h-screen relative ">
      {staticBg ? <ImageBg /> : <VideoBg />}
      <Header openModal={openModal} />
      {/* <Banner /> */}
      {location && (
        <Current location={location} current={current} forecast={forecast[0]} />
      )}
      <ModalWindow
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        staticBackground={staticBackground}
        staticBg={staticBg}
      />
    </div>
  );
}

export default App;
