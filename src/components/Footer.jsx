import React from 'react';
import { Link } from 'react-router-dom';
import Ig from "../images/ig.png";
import Fb from "../images/fb.png";
import Twitter from "../images/twitter.png";

export default function Footer() {
  return (
    <div className="bg-accentblue py-14">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 p-4 md:p-16 mx-4 md:mx-16 font-light">
        <div className="absolute md:relative invisible md:visible md:flex flex-col md:space-y-10 md:w-full font-pp-neue-machina ">
          <h3 className="text-accentorange font-bold text-xl md:text-2xl">Services</h3>
          <ul className="list-disc ml-4 space-y-4 md:space-y-10 text-xs md:text-sm" style={{ color: 'white' }}>
            <li>
              <Link to="/" className="text-white text-xs hover:text-gray-300">Digital Marketing</Link>
            </li>
            <li>
              <Link to="/" className="text-white text-xs hover:text-gray-300">Web/App Development</Link>
            </li>
            <li>
              <Link to="/" className="text-white text-xs hover:text-gray-300">Social Media Management</Link>
            </li>
            <li>
              <Link to="/" className="text-white text-xs hover:text-gray-300">Data Analytics & Insights</Link>
            </li>
            <li>
              <Link to="/" className="text-white text-xs hover:text-gray-300">CRM Implementation</Link>
            </li>
          </ul>
        </div>
        <div className="absolute md:relative invisible md:visible space-y-6 md:space-y-10 font-pp-neue-machina lg:ml-6">
          <h3 className="text-accentorange font-bold text-xl md:text-2xl">About</h3>
          <ul className="list-disc ml-4 space-y-4 md:space-y-10 text-xs md:text-sm" style={{ color: 'white' }}>
            <li>
              <Link to="/about" className="text-white text-xs hover:text-gray-300">Careers</Link>
            </li>
            <li>
              <Link to="/about" className="text-white text-xs hover:text-gray-300">Our Story</Link>
            </li>
            <li>
              <Link to="/about" className="text-white text-xs hover:text-gray-300">Team</Link>
            </li>
          </ul>
        </div>
        <div className="space-y-2 md:space-y-10 font-pp-neue-machina">
          <h3 className="text-accentorange  font-bold text-xl md:text-2xl">Help</h3>
          <ul className="md:list-disc md:ml-4 space-y-4 md:space-y-10 text-xs md:text-sm" style={{ color: 'white' }}>
            <li>
              <Link to="/suppour" className="text-white text-xs hover:text-gray-300">Contact Us</Link>
            </li>
            <li>
              <Link to="/support  " className="text-white text-xs hover:text-gray-300">FAQs</Link>
            </li>
          </ul>
        </div>
        <div className="absolute md:relative invisible md:visible col-span-1 md:col-span-2 space-y-6 md:space-y-10 text-white ml-4 font-pp-neue-machina">
          <div className="flex flex-col items-center w-full md:min-w-[10rem] h-full border-4 rounded-3xl p-4 md:p-6 md:mt-6 shadow-buttonshadow">
            <h3 className="text-lg md:text-xl text-center font-thin mb-2">Newsletter</h3>
            <p className="text-center font-bold text-lg md:text-lg">
              Sign Up for a monthly <span className="text-accentorange">"Bear hug"</span>
            </p>
            <input
              type="email"
              placeholder="Email"
              className="rounded-3xl bg-slate-500/30 w-full md:w-11/12 h-10 md:h-14 px-4 md:px-10 place-self-center mt-4"
            />
            <button className="text-white bg-accentorange w-full md:w-2/3 h-10 md:h-14 font-bold text-lg md:text-2xl rounded-3xl mt-5 shadow-buttonshadow">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="mx-auto flex flex-col lg:mx-14 md:flex-row justify-between text-accentorange p-8 md:p-16">
        <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-24 align-middle">
          <li className="text-lg md:text-2xl font-bold">
            <span className="text-white">Orange</span>Bear
          </li>
          <li className="absolute md:relative invisible md:visible">Privacy Policy</li>
          <li className="absolute md:relative invisible md:visible">Terms and Conditions</li>
        </ul>
        <div className="-mt-6 md:mt-0">
        <img className="float-right w-8 mx-1 -mt-1 md:p-1" src={Ig} alt="Instagram"/>
        <img className="float-right w-5 mx-2 -mt-1 md:p-[3px]" src={Fb} alt="Facebook"/>
        <img className="float-right w-8 mx-1 md:p-1" src={Twitter} alt="Twitter"/>
        </div>
      </div>
    </div>
  );
}
