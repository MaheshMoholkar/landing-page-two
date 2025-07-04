"use client";

import ArrowWIcon from "@/assets/icons/arrow-w.svg";
import cursorImage from "@/assets/images/cursor.png";
import messageImage from "@/assets/images/message.png";
import Image from "next/image";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <div className="bg-black text-white bg-[linear-gradient(to_bottom,#000,#200D42,#200D42_34%,#4F21A1_65%,#A46EDB_82%)] py-[72px] sm:py-24 lg:py-[148px] relative overflow-clip">
      <div className="absolute h-[375px] w-[750px] sm:w-[1536px] sm:h-[768px] md:w-[2400px] md:h-[1200px] lg:w-[3600px] lg:h-[1600px] rounded-[100%] bg-black left-1/2 -translate-x-1/2 border border-[#B48CDE] bg-[radial-gradient(closest-side,#000_82%,#9560EB)] top-[calc(100%-96px)] sm:top-[calc(100%-120px)] lg:top-[calc(100%-172px)]"></div>
      <div className="container relative">
        <div className="flex items-center justify-center">
          <a
            href="#"
            className="inline-flex border py-1 px-2 rounded-lg border-white/30 gap-3"
          >
            <span className="bg-[linear-gradient(to_right,#F87AFF,#FB93D0,#FFDD99,#2FD8FE)] text-transparent bg-clip-text">
              Version 2.0 is here
            </span>
            <span className="inline-flex items-center gap-1">
              <span>Read more</span>
              <ArrowWIcon className="w-4 h-4" />
            </span>
          </a>
        </div>
        <div className="flex justify-center mt-8">
          <div className="inline-flex relative">
            <h1 className="text-7xl sm:text-9xl font-bold tracking-tighter text-center inline-flex">
              One Task <br /> at a Time
            </h1>
            <motion.div
              drag
              className="absolute top-[108px] right-[476px] hidden sm:inline"
            >
              <Image
                src={cursorImage}
                height={200}
                width={200}
                alt="Cursor Image"
                className="max-w-none"
                draggable={false}
              />
            </motion.div>
            <motion.div
              drag
              className="absolute top-[56px] left-[498px] hidden sm:inline"
            >
              <Image
                src={messageImage}
                height={200}
                width={200}
                alt="Message Image"
                className="max-w-none"
                draggable={false}
              />
            </motion.div>
          </div>
        </div>
        <div className="flex justify-center">
          <p className="text-center text-xl mt-8 max-w-md mx-auto">
            Celebrate the joy of accomplishment with an app designed to track
            progress, motivate your efforts, and celebrate your success.
          </p>
        </div>
        <div className="flex justify-center mt-8">
          <button className="btn btn-primary">Get for free</button>
        </div>
      </div>
    </div>
  );
};
