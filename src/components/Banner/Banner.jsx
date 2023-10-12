import { BiSolidQuoteAltLeft, BiSolidQuoteAltRight } from "react-icons/bi";

import { motion } from "framer-motion";

const animation = {
  hidden: {
    x: 100,
    opacity: 0,
  },
  visible: (custom) => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.2 },
  }),
};

export default function Banner() {
  return (
    <motion.div
      initial="hidden"
      // whileInView="visible" при загрузке экрана
      animate="visible"
      variants={animation}
      custom={3}
      className=" hidden sm:flex rounded-lg flex-col items-end gap-5 /2 right-0 backdrop-blur-sm bg-black/40 font-handfree  text-white py-6 px-7"
    >
      <div className="flex gap-1 text-2xl md:text-6xl">
        {" "}
        <BiSolidQuoteAltLeft size={32} />
        Vows made in storm forgotten in calm.
        <BiSolidQuoteAltRight size={32} />
      </div>
      <p className=" text-lg md:text-2xl">William Shakespeare</p>
    </motion.div>
  );
}
