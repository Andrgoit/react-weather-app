import { useSelector } from "react-redux";
import { SelectCityes } from "../../redux/cityes/cityesSelectors";
import { useDispatch } from "react-redux";
import { setQuery } from "../../redux/query/querySlice";
import { resetCityes } from "../../redux/cityes/cityesSlice";

export default function CityList() {
  const dispatch = useDispatch();
  const cityes = useSelector(SelectCityes);

  const elements = cityes.map(({ id, name, country }) => (
    <li
      className="text-white cursor-pointer hover:text-sky-300 p-2"
      key={id}
      onClick={() => {
        const fullname = `${name},${country}`;
        dispatch(setQuery(fullname));
        dispatch(resetCityes());
      }}
    >
      {name} / {country}
    </li>
  ));
  if (cityes) {
    return (
      <ul className=" z-10 max-h-[240px] absolute top-16 left-3 rounded-xl py-5 flex flex-col  bg-black max-w-xs gap-1">
        {elements}
      </ul>
    );
  }
}
