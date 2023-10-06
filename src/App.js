import { useState } from "react";
import { VideoBg, Header } from "./components";
import ModalWindow from "./components/Modal/Modal";

function App() {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className=" w-full h-screen relative ">
      <VideoBg />
      <Header openModal={openModal} />
      <ModalWindow modalIsOpen={modalIsOpen} closeModal={closeModal} />
    </div>
  );
}

export default App;
