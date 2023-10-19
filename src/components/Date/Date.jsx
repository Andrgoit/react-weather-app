import format from "date-fns/format";
import { useSelector } from "react-redux";
import { SelectLang } from "../../redux/setting/settingSelectors";
import langNormalize from "../../utils/langNormalize";

export default function DateWiget() {
  const lang = useSelector(SelectLang);
  const local = langNormalize(lang);

  const weekDay = format(new Date(), "EEEE", {
    locale: local,
  });
  const date = format(new Date(), "d MMMM yyyy", {
    locale: local,
  });
  return (
    <div className="flex flex-col gap-2 items-center text-white">
      <p>{weekDay}</p>
      <p>{date}</p>
    </div>
  );
}
