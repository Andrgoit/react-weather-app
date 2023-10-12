import bg from "../../assets/img/bg.jpg";

export default function ImageBg({ children }) {
  return (
    <div
      className="w-full min-h-screen flex flex-col gap-6 items-center"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {children}
    </div>
  );
}
