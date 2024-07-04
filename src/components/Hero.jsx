import React from "react";
import Heroimage from "../images/heroimage.jpeg";

export default function Hero(){
    return(
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-8 md:p-16 mx-4 md:mx-16 font-light">
        <div className="flex flex-col space-y-6 md:space-y-10 w-full font-pp-neue-machina ">
        <img src={Heroimage} />
        </div>
        <div className="flex flex-col space-y-6 md:space-y-10 w-full font-pp-neue-machina lg:pl-16">
        <span>Blog Post
        <p className="lg:text-7xl text-4xl font-extrabold text-accentblue lg:mt-4">Web 3.0: <br/> Evolution of Digital Mar...</p>
        </span>
        <div className="flex flex-row space-x-32 lg:mt-20">
        <button className="text-white bg-accentorange w-full md:w-2/3 h-10 md:h-14 font-bold text-lg md:text-2xl rounded-3xl mt-5 shadow-bluebuttonshadow">
              Read Up!
            </button>
        <button className="text-accentorange bg-white w-full md:w-2/3 h-10 md:h-14 font-bold text-lg md:text-2xl rounded-3xl mt-5 shadow-buttonshadow border-2 border-accentorange">
              Preview
            </button>
        </div>
        </div>
        </div>

    )
}