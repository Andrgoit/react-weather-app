import Logo from "./Logo/Logo";
import Date from "../Date/Date";
import SearchForm from "./SearchForm/SearchForm";
import { FiSettings } from "react-icons/fi";
import { motion } from "framer-motion";

const animation = {
  hidden: {
    y: -100,
    opacity: 0,
  },
  visible: (custom) => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 0.2 },
  }),
};

export default function Header({ openModal }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={animation}
      custom={2}
      className=" backdrop-blur-md bg-black/40 absolute flex flex-col px-4 py-4 sm:flex-row sm:justify-between items-center top-0 left-0 w-full border-b-2 border-b-white  "
      // style={{ background: "linear-gradient(90deg, #4b6cb7 0%, #182848 100%)" }}
    >
      <div className="flex flex-col items-center">
        <Logo />
        <Date />
      </div>
      <SearchForm />
      <div
        onClick={openModal}
        className=" cursor-pointer w-10 h-10 transition-colors duration-300 ease-in-out text-white rounded-full hover:bg-slate-400 hover:text-black flex items-center justify-center"
      >
        <FiSettings size={32} />
      </div>
    </motion.div>
  );
}
