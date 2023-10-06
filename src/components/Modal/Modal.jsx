import Modal from "react-modal";

const customStyles = {
  overlay: { backgroundColor: "rgba(0, 0, 0, 0.5)" },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#modal");

export default function ModalWindow({ modalIsOpen, closeModal }) {
  return (
    <Modal
      //   parentSelector={() => document.querySelector("#modal")}
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      //   contentLabel="Example Modal"
    >
      <button onClick={closeModal}>X</button>
      <div>Это модальное окно с настройками</div>
    </Modal>
  );
}
