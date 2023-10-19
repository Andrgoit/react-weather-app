import { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";
import { MdOutlineMyLocation } from "react-icons/md";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { setQuery } from "../../../redux/query/querySlice";
import { fetchCityes } from "../../../redux/cityes/cityesOperations";
import findCityByIp from "../../../api/findCityByIp";

import CityList from "../../CityList/CityList";

//localization
import { useTranslation } from "react-i18next";

export default function SearchForm() {
  const [q, setQ] = useState("");
  const [isHover, setIsHover] = useState(false);
  const dispatch = useDispatch();

  const { t } = useTranslation();

  const handlerSubmit = (e) => {
    e.preventDefault();
    if (!q) {
      toast.warn(`{t("header.warn")}`);
    }
    dispatch(setQuery(q));
    setQ("");
  };

  const locationHandler = async (e) => {
    e.preventDefault();
    const { city, country_name } = await findCityByIp();
    const fullName = `${city},${country_name}`;
    dispatch(setQuery(fullName));
  };

  useEffect(() => {
    if (q) {
      dispatch(fetchCityes(q));
    }
  }, [dispatch, q]);

  return (
    <form
      onSubmit={handlerSubmit}
      className=" relative bg-transparent border-b-2 border-b-white rounded-2xl py-2 px-2 flex items-center max-w-xs sm:max-w-[400px]"
    >
      <input
        onChange={(e) => setQ(e.target.value)}
        name="query"
        value={q}
        type="text"
        placeholder={t("header_placeholder")}
        autoComplete="off"
        className="w-full outline-0 bg-transparent py-2 px-2 text-xl  text-white font-medium placeholder:text-white/40"
      />
      <button type="submit" className="text-white">
        <IoSearch size={30} />
      </button>
      <button
        type="button"
        onClick={locationHandler}
        className="text-white relative"
        onMouseEnter={() => {
          setIsHover(true);
        }}
        onMouseLeave={() => {
          setIsHover(false);
        }}
      >
        <MdOutlineMyLocation size={30} />
        {isHover && (
          <div className=" z-10 p-2 w-48 rounded-lg bg-orange-300 text-black absolute top-10 right-[35px]">
            <p>{t("header_hover")}</p>
          </div>
        )}
      </button>
      <CityList />
    </form>
  );
}
