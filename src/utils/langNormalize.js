import { enGB, ru, uk } from "date-fns/locale";

const langs = [
  { oldLang: "en", newLang: enGB },
  { oldLang: "ru", newLang: ru },
  { oldLang: "uk", newLang: uk },
];

const langNormalize = (lang) => {
  const [{ newLang }] = langs.filter((item) => item.oldLang === lang);
  return newLang;
};

export default langNormalize;
