import Image from "next/image";
import appScreen from "../assets/images/app-screen.png";

export const ProductShowcase = () => {
  return (
    <div className="bg-black text-white bg-gradient-to-b from-black to-[#5D2CA8] py-[72px] sm:py-24">
      <div className="container">
        <h2 className="text-center text-5xl sm:text-6xl font-bold tracking-tighter">
          Intuitive interface
        </h2>
        <div className="max-w-[600px] mx-auto">
          <p className="text-center mt-5 text-xl text-white/70">
            Celebrate the joy of accomplishment with an app designed to track
            your progress, motivate your effors and celebrate your success, one
            task at a time.
          </p>
        </div>
        <div className="mt-14 flex justify-center">
          <Image src={appScreen} alt="App screen" />
        </div>
      </div>
    </div>
  );
};
