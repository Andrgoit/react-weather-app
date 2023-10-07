import format from "date-fns/format";
// import { ru } from "date-fns/locale";

export default function DateWiget() {
  const weekDay = format(new Date(), "EEEE");
  const date = format(new Date(), "d MMMM yyyy");
  return (
    <div className="flex flex-col gap-2 items-center text-white">
      <p>{weekDay}</p>
      <p>{date}</p>
    </div>
  );
}
