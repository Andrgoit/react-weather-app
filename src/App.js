import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleStaticBg } from "./redux/setting/settingSlice";
import { fetchWeather } from "./redux/weather/weatherOperations";
import { SelectLocation } from "./redux/weather/weatherSelectors";

import {
  VideoBg,
  ImageBg,
  Header,
  Banner,
  Current,
  Forecast,
} from "./components";
import ModalWindow from "./components/Modal/Modal";

function App() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const staticBg = useSelector((store) => store.setting.staticBg);
  const city = useSelector((store) => store.query.query);
  const location = useSelector(SelectLocation);
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
        <div className="absolute  top-1/3 left-1/3 flex flex-col gap-8 items-center">
          <Current />
          <Forecast />
        </div>
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
