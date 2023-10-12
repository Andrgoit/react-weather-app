import Logo from "./Logo/Logo";
import Date from "../Date/Date";
import Setting from "../Setting/Setting";
import SearchForm from "./SearchForm/SearchForm";

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

export default function Header() {
  return (
    <motion.div
      initial="hidden"
      // whileInView="visible" при загрузке экрана
      animate="visible"
      variants={animation}
      custom={2}
      className="backdrop-blur-md bg-black/40  flex flex-col px-4 py-4 sm:flex-row sm:justify-between items-center top-0 left-0 right-0 w-full border-b-2 border-b-white"
    >
      <div className="flex flex-col items-center">
        <Logo />
        <Date />
      </div>
      <SearchForm />
      <Setting />
    </motion.div>
  );
}
