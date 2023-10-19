import format from "date-fns/format";

const weekDay = (data) => {
  return format(new Date(data), "EEEE");
};

export default weekDay;
