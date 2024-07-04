import React from 'react';
import { Link } from 'react-router-dom';

export default function ServicesSection() {
  return (
    <div className="bg-accentblue py-14">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 p-8 md:p-16 mx-4 md:mx-16 font-light">
        <div className="flex flex-col space-y-6 md:space-y-10 w-full font-pp-neue-machina ">
          <h3 className="text-accentorange font-bold text-xl md:text-2xl">Services</h3>
          <ul className="list-disc ml-4 space-y-4 md:space-y-10 text-xs md:text-sm" style={{ color: 'white' }}>
            <li>
              <Link to="/" className="text-white hover:text-gray-300">Digital Marketing</Link>
            </li>
            <li>
              <Link to="/about" className="text-white hover:text-gray-300">Web/App Development</Link>
            </li>
            <li>
              <Link to="/services" className="text-white hover:text-gray-300">Social Media Management</Link>
            </li>
            <li>
              <Link to="/contact" className="text-white hover:text-gray-300">Data Analytics & Insights</Link>
            </li>
            <li>
              <Link to="/contact" className="text-white hover:text-gray-300">CRM Implementation</Link>
            </li>
          </ul>
        </div>
        <div className="space-y-6 md:space-y-10 font-pp-neue-machina lg:ml-6">
          <h3 className="text-accentorange font-bold text-xl md:text-2xl">About</h3>
          <ul className="list-disc ml-4 space-y-4 md:space-y-10 text-xs md:text-sm" style={{ color: 'white' }}>
            <li>
              <Link to="/additional-service-1" className="text-white hover:text-gray-300">Careers</Link>
            </li>
            <li>
              <Link to="/additional-service-2" className="text-white hover:text-gray-300">Our Story</Link>
            </li>
            <li>
              <Link to="/additional-service-2" className="text-white hover:text-gray-300">Team</Link>
            </li>
          </ul>
        </div>
        <div className="space-y-6 md:space-y-10 font-pp-neue-machina">
          <h3 className="text-accentorange  font-bold text-xl md:text-2xl">Help</h3>
          <ul className="list-disc ml-4 space-y-4 md:space-y-10 text-xs md:text-sm" style={{ color: 'white' }}>
            <li>
              <Link to="/even-more-service-1" className="text-white hover:text-gray-300">Contact Us</Link>
            </li>
            <li>
              <Link to="/even-more-service-2" className="text-white hover:text-gray-300">FAQs</Link>
            </li>
          </ul>
        </div>
        <div className="col-span-1 md:col-span-2 space-y-6 md:space-y-10 text-white ml-4 font-pp-neue-machina">
          <div className="flex flex-col items-center w-full md:w-10/12 h-full border-4 rounded-3xl p-4 md:p-6 md:mt-6 shadow-buttonshadow">
            <h3 className="text-lg md:text-xl text-center font-thin mb-2">Newsletter</h3>
            <p className="text-center font-bold text-lg md:text-xl">
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
        <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-24">
          <li className="text-lg md:text-2xl font-bold">
            <span className="text-white">Orange</span>Bear
          </li>
          <li>Privacy Policy</li>
          <li>Terms and Conditions</li>
        </ul>
      </div>
    </div>
  );
}
