import React from "react";
import Slider from "react-slick";
import Heroimage from "../images/heroimage.png";
import Heroimage2 from "../images/article2.jpg";
import Heroimage3 from "../images/article3.png";
import { Link } from "react-router-dom";

// Slick carousel styles
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function Hero() {
  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="grid grid-cols-1 lg:pb-16 mx-0 font-light">
      <Slider {...settings}>
        {/* Slide 1 */}
        <div className="flex flex-col w-full font-pp-neue-machina mx-0">
          <img
            src={Heroimage}
            alt="hero"
            className="w-full object-cover rounded-none max-h-[500px] min-h-[500px]"
          />
          <div className="flex flex-col space-y-6 md:space-y-10 w-full lg:pl-10">
            <span className="hidden invisible md:visible text-sm md:text-base">
              Blog Post
            </span>
            <p className="lg:text-5xl md:text-3xl text-2xl text-center md:text-left font-extrabold text-accentblue lg:mt-4">
              Web 3.0: <br /> Evolution of Digital Mar...
            </p>
            <div className="flex flex-col md:w-2/5 md:flex-row md:space-x-2 lg:space-x-8 lg:mt-20 space-y-4 md:space-y-0">
            <Link to="/blog1" className=" flex items-center justify-center text-white bg-accentorange mx-auto w-2/5 md:w-1/2 h-12 md:h-14 font-bold text-lg md:text-2xl rounded-3xl shadow-bluebuttonshadow transition duration-500 hover:scale-105 hover:bg-accentblue hover:shadow-orangebuttonshadow">
                Read Up!
              </Link>
              <button className="text-accentorange bg-white mx-auto w-2/5 md:w-1/2 h-12 md:h-14 font-bold text-lg md:text-2xl rounded-3xl shadow-buttonshadow border-2 border-accentorange transition duration-500 hover:scale-105">
                Preview
              </button>
            </div>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="flex flex-col w-full font-pp-neue-machina mx-0">
          <img
            src={Heroimage2}
            alt="hero"
            className="w-full object-cover rounded-none max-h-[500px] min-h-[500px]"
          />
          <div className="flex flex-col space-y-6 md:space-y-10 w-full lg:pl-10">
            <span className="hidden invisible md:visible text-sm md:text-base">
              Blog Post
            </span>
            <p className="lg:text-5xl md:text-3xl text-2xl text-center md:text-left font-extrabold text-accentblue lg:mt-4">
            The VAN WESTERN Model:: <br />  A Pricing Analysis Tool
            </p>
            <div className="flex flex-col md:w-2/5 md:flex-row md:space-x-2 lg:space-x-8 lg:mt-20 space-y-4 md:space-y-0">
            <Link to="/blog2" className=" flex items-center justify-center text-white bg-accentorange mx-auto w-2/5 md:w-1/2 h-12 md:h-14 font-bold text-lg md:text-2xl rounded-3xl shadow-bluebuttonshadow transition duration-500 hover:scale-105 hover:bg-accentblue hover:shadow-orangebuttonshadow">
                Read Up!
              </Link>
              <button className="text-accentorange bg-white mx-auto w-2/5 md:w-1/2 h-12 md:h-14 font-bold text-lg md:text-2xl rounded-3xl shadow-buttonshadow border-2 border-accentorange transition duration-500 hover:scale-105">
                Preview
              </button>
            </div>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="flex flex-col w-full font-pp-neue-machina mx-0">
          <img
            src={Heroimage3}
            alt="hero"
            className="w-full object-cover rounded-none max-h-[500px] min-h-[500px]"
          />
          <div className="flex flex-col space-y-6 md:space-y-10 w-full lg:pl-10">
            <span className="hidden invisible md:visible text-sm md:text-base">
              Blog Post
            </span>
            <p className="lg:text-5xl md:text-3xl text-2xl text-center md:text-left font-extrabold text-accentblue lg:mt-4">
            Micro-Moments: <br /> How to Optimize Content...
            </p>
            <div className="flex flex-col md:w-2/5 md:flex-row md:space-x-2 lg:space-x-8 lg:mt-20 space-y-4 md:space-y-0">
            <Link to="/blog3" className=" flex items-center justify-center text-white bg-accentorange mx-auto w-2/5 md:w-1/2 h-12 md:h-14 font-bold text-lg md:text-2xl rounded-3xl shadow-bluebuttonshadow transition duration-500 hover:scale-105 hover:bg-accentblue hover:shadow-orangebuttonshadow">
                Read Up!
              </Link>
              <button className="text-accentorange bg-white mx-auto w-2/5 md:w-1/2 h-12 md:h-14 font-bold text-lg md:text-2xl rounded-3xl shadow-buttonshadow border-2 border-accentorange transition duration-500 hover:scale-105">
                Preview
              </button>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}
