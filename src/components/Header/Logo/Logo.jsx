import logo from "../../../assets/icons/logo.svg";

export default function Logo() {
  return (
    <div className="flex items-center">
      <div className=" w-24 h-24">
        <img src={logo} alt="logo" className="w-full h-full" />
      </div>
      <p className="text-white text-4xl">Weather</p>
    </div>
  );
}
