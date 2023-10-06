import Logo from "./Logo/Logo";
import SearchForm from "./SearchForm/SearchForm";
import { FiSettings } from "react-icons/fi";

export default function Header({ openModal }) {
  return (
    <div
      className="absolute flex px-4 justify-between items-center top-0 left-0 w-full h-40 border-b-2 border-b-white  "
      // style={{ background: "linear-gradient(90deg, #4b6cb7 0%, #182848 100%)" }}
    >
      <Logo />
      <SearchForm />
      <div
        onClick={openModal}
        className=" cursor-pointer w-10 h-10 transition-colors duration-300 ease-in-out text-white rounded-full hover:bg-slate-400 hover:text-black flex items-center justify-center"
      >
        <FiSettings size={32} />
      </div>
    </div>
  );
}
