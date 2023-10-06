import { IoSearch } from "react-icons/io5";

export default function SearchForm() {
  return (
    <form className=" bg-slate-400 rounded-2xl py-2 px-2 flex items-center w-[400px]">
      <input
        type="text"
        placeholder="Enter city..."
        className="w-full outline-0 bg-transparent py-2 px-2 text-xl  text-white font-medium placeholder:text-white"
      />
      <button type="submit" className="text-white">
        <IoSearch size={30} />
      </button>
    </form>
  );
}