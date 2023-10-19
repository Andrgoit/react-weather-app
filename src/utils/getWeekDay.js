import format from "date-fns/format";
import langNormalize from "../utils/langNormalize";

const weekDay = (data, lang) => {
  const local = langNormalize(lang);
  return format(new Date(data), "EEEE", {
    locale: local,
  });
};

export default weekDay;
