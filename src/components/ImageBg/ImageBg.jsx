import bg from "../../assets/img/bg.jpg";

export default function ImageBg() {
  return (
    <div>
      <img
        src={bg}
        alt="background"
        className="w-full h-screen absolute top-0 object-cover z-[-1]"
      />
      <div className="w-full h-screen bg-black opacity-10"></div>
    </div>
  );
}
