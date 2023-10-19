import Switch from "react-switch";
import { useSelector, useDispatch } from "react-redux";
import { toggleCelsius } from "../../redux/setting/settingSlice";
import { SelectIsCelsius } from "../../redux/setting/settingSelectors";

export default function Setting() {
  const isCelsius = useSelector(SelectIsCelsius);
  const dispatch = useDispatch();

  return (
    <div className="text-white flex flex-col items-end gap-3">
      <div className="flex items-center  ">
        <Switch
          uncheckedIcon={
            <p className=" p-1">
              <sup>o</sup>F
            </p>
          }
          checkedIcon={
            <p className=" p-1">
              <sup>o</sup>C
            </p>
          }
          onChange={() => dispatch(toggleCelsius())}
          checked={isCelsius}
        />
      </div>
    </div>
  );
}
