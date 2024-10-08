import React from "react";
import Event1 from "../images/event1.png";
import Event2 from "../images/event2.png";
import Article1 from "../images/article1.png";
import Featured1 from "../images/featured1.png";

export default function Explore() {
  return (
    <div>
      <div className="md:mx-12 md:p-12 px-5 py-10">
        <input
          placeholder="Let's Explore"
          className="w-full text-center text-gray-700 text-md p-4 pl-6 my-2 border rounded-3xl bg-gray-300"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-10 p-3 px-6 md:p-16 mx-0 md:mx-0 font-light font-pp-neue-machina w-full">
        <div>
          <p className="text-3xl font-bold p-2">Events</p>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-none group border-2 rounded-2xl shadow-skybuttonshadow border-accentblue pl-4 pt-4 pr-4 pb-10 transition-transform duration-700 hover:bg-accentblue hover:shadow-orangebuttonshadow hover:scale-105">
            <div className="lg:mb-8 md:mb-8 text-center">
              <img src={Event1} alt="hero" className="rounded-2xl" />
              <span className="text-sm text-accentorange font-bold">
                15 Mar, 2023
              </span>
            </div>
            <div className="lg:mb-8 md:mb-8 text-center">
              <img src={Event2} alt="hero" className="rounded-2xl" />
              <span className="text-sm text-accentorange font-bold">
                15 Mar, 2023
              </span>
            </div>
          </div>
        </div>

        <div className="md:col-span-2 mt-10 md:mt-0">
          <p className="text-3xl font-bold p-2">Latest Article</p>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-none group md:border-2 rounded-2xl mt-5 md:mt-0 md:shadow-skybuttonshadow border-accentblue transition-transform duration-700 hover:bg-accentblue hover:shadow-orangebuttonshadow hover:scale-105">
            <div className="lg:mb-8 mb-4">
              <img
                src={Article1}
                alt="Web3"
                className="object-cover rounded-3xl md:rounded-t-xl min-h-44"
              />
            </div>
            <div className="lg:mb-4 mb-4 md:pl-10 pt-2 md:pr-10 md:pb-1 ">
              <h3 className="font-bold text-md md:text-2xl text-accentblue mb-3 md:mb-16 transition-all duration-500 group-hover:text-white md:max-h-[2.5rem]">
                Web 3.0: Evolution of Digital Marketing.
              </h3>
              <span>
                <p className="transition-all duration-300 group-hover:text-white text-xs">
                  It’s no secret that the digital industry is booming. From
                  exciting startups to global...
                  <br />
                  <br />
                  <br />
                </p>
              </span>
            </div>
          </div>
        </div>

        <div className="mt-10 md:mt-0">
          <p className="text-3xl font-bold p-2 mb-5 md:mb-0">Featured</p>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-none group md:border-2 rounded-2xl md:shadow-skybuttonshadow md:border-accentblue transition-transform duration-700 hover:bg-accentblue hover:shadow-orangebuttonshadow hover:scale-105">
            <div className="lg:mb-8 mb-4x">
              <img
                src={Featured1}
                alt="Web3"
                className="object-cover md:h-80 rounded-3xl md:rounded-t-xl md:rounded-b-none min-h-44"
              />
            </div>
            <div className="lg:mb-4 md:mb-4 md:pl-10 pt-2 md:pr-10 pb-1 ">
              <h3 className="font-bold md:text-xs text-md text-accentblue md:mb-16 mb-3 transition-all duration-500 group-hover:text-white md:max-h-[2.5rem]">
                A Beginner's Guide on How to Invest in Bitcoin
              </h3>
              <span>
                <p className="transition-all duration-300 group-hover:text-white text-xs">
                  It’s no secret that the digital industry is booming. From
                  exciting startups to global...
                  <br />
                  <br />
                  <br />
                </p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
