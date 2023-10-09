import { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { setQuery } from "../../../redux/query/querySlice";

export default function SearchForm() {
  const [q, setQ] = useState("");
  const dispatch = useDispatch();

  const handlerSubmit = (e) => {
    e.preventDefault();
    if (!q) {
      toast.warn("Please, enter name of city...");
    }
    dispatch(setQuery(q));
    setQ("");
  };

  return (
    <form
      onSubmit={handlerSubmit}
      className=" bg-transparent border-b-2 border-b-white rounded-2xl py-2 px-2 flex items-center w-[400px]"
    >
      <input
        onChange={(e) => setQ(e.target.value)}
        name="query"
        value={q}
        type="text"
        placeholder="Enter city..."
        autoComplete="off"
        className="w-full outline-0 bg-transparent py-2 px-2 text-xl  text-white font-medium placeholder:text-white/40"
      />
      <button type="submit" className="text-white">
        <IoSearch size={30} />
      </button>
    </form>
  );
}
