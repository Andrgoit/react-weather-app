import { useState } from "react";
import { VideoBg, ImageBg, Header } from "./components";
import ModalWindow from "./components/Modal/Modal";

function App() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [staticBg, setStaticBg] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  function staticBackground() {
    setStaticBg((prev) => !prev);
  }

  return (
    <div className=" w-full h-screen relative ">
      {staticBg ? <ImageBg /> : <VideoBg />}
      <Header openModal={openModal} />
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
