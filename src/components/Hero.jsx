import React from "react";
import Heroimage from "../images/heroimage.png";

export default function Hero() {
  return (
    <div className="grid grid-cols-1 md:gap-4 p-0 md:p-0 mx-0 md:mx-0 font-light">
      <div className="flex flex-col w-full font-pp-neue-machina mx-0">
        <img src={Heroimage} alt="hero" className="w-full object-cover rounded-none max-h-[500px]" />
      </div>
      <div className="flex flex-col space-y-6 md:space-y-10 w-full font-pp-neue-machina lg:pl-10">
        <span className="hidden invisible md:visible text-sm md:text-base">Blog Post</span>
        <p className="lg:text-5xl md:text-3xl text-2xl text-center md:text-left font-extrabold text-accentblue lg:mt-4">
          Web 3.0: <br /> Evolution of Digital Mar...
        </p>
        <div className="flex flex-col md:w-2/5 md:flex-row md:space-x-2 lg:space-x-8 lg:mt-20 space-y-4 md:space-y-0">
          <button className="text-white bg-accentorange mx-auto w-2/5 md:w-1/2 h-12 md:h-14 font-bold text-lg md:text-2xl rounded-3xl shadow-bluebuttonshadow transition duration-500 hover:scale-105 hover:bg-accentblue hover:shadow-orangebuttonshadow">
            Read Up!
          </button>
          <button className="text-accentorange bg-white mx-auto w-2/5 md:w-1/2 h-12 md:h-14 font-bold text-lg md:text-2xl rounded-3xl shadow-buttonshadow border-2 border-accentorange transition duration-500 hover:scale-105">
            Preview
          </button>
        </div>
      </div>
    </div>
  );
}
