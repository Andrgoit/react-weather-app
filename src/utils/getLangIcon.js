import langIcons from "../data/langIcons";

export const getLangIcons = (lang) => {
  const [{ icon }] = langIcons.filter((item) => item.lang === lang);
  return icon;
};
