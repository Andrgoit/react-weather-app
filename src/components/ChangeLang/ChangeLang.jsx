import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { SelectLang } from "../../redux/setting/settingSelectors";
import { getLangIcons } from "../../utils/getLangIcon";
import { changeLang } from "../../redux/setting/settingSlice";
import langIcons from "../../data/langIcons";

export default function ChangeLang() {
  const [isOpen, setIsOpen] = useState(false);
  const lang = useSelector(SelectLang);
  const icon = getLangIcons(lang);
  const dispatch = useDispatch();
  const filteredIcons = langIcons.filter((item) => item.lang !== lang);

  const elements = filteredIcons.map(({ id, lang, icon }) => (
    <li
      key={id}
      className="w-12 h-12 cursor-pointer"
      onClick={() => dispatch(changeLang(lang), setIsOpen(false))}
    >
      <img src={icon} alt="lang icon" />
    </li>
  ));
  return (
    <>
      <div className=" w-12 h-12 relative cursor-pointer">
        <img src={icon} alt="icon" onClick={() => setIsOpen(!isOpen)} />
        {isOpen && (
          <ul className=" absolute top-[50px] left-0 flex flex-col gap-2">
            {elements}
          </ul>
        )}
      </div>
    </>
  );
}
