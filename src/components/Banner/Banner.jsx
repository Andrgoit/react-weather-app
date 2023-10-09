import { BiSolidQuoteAltLeft, BiSolidQuoteAltRight } from "react-icons/bi";

export default function Banner() {
  return (
    <div className=" hidden sm:flex rounded-lg flex-col items-end gap-5 absolute top-1/2 right-0 backdrop-blur-sm bg-white/10 font-handfree  text-white py-6 px-7">
      <div className="flex gap-1 text-2xl md:text-6xl">
        {" "}
        <BiSolidQuoteAltLeft size={32} />
        Vows made in storm forgotten in calm.
        <BiSolidQuoteAltRight size={32} />
      </div>
      <p className=" text-lg md:text-2xl">William Shakespeare</p>
    </div>
  );
}
