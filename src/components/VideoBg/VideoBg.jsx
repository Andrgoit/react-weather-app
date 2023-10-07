import video from "../../assets/video/video2.mp4";

export default function VideoBg() {
  return (
    <div>
      <video
        src={video}
        autoPlay
        muted
        loop
        className="w-full h-screen absolute top-0 object-cover z-[-1]"
      ></video>
      <div className="w-full h-screen bg-black opacity-10"></div>
    </div>
  );
}
