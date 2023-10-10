import Modal from "react-modal";
import Switch from "react-switch";
import { AiOutlineCloseCircle } from "react-icons/ai";

const customStyles = {
  overlay: { backgroundColor: "rgba(0, 0, 0, 0.5)" },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    minWidth: "320px",
    minHeight: "400px",
  },
};

Modal.setAppElement(document.getElementById("modal"));

export default function ModalWindow({
  modalIsOpen,
  closeModal,
  staticBg,
  staticBackground,
}) {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
    >
      <button onClick={closeModal} className="ml-[90%]">
        <AiOutlineCloseCircle size={30} className=" hover:text-red-500 " />
      </button>
      <div className="flex items-center justify-around">
        <p>Image background:</p>
        <Switch onChange={staticBackground} checked={staticBg} />
      </div>
    </Modal>
  );
}
