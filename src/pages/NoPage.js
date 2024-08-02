import React from 'react';

function NoPage() {
  return (
    <div className="text-center text-white bg-gradient-to-t from-blue-900 to-black h-[100vh]">
      <div className="flex space-x-36 text-[200px] items-center justify-center">
      <h1 className="transtion transform rotate-6">4</h1> <h1 className="transtion transform -rotate-6">4</h1>
      </div>
      <p className="text-4xl">Page No found</p>
      <p className="text-xs mt-5 mb-10">Tough times never last, tough bears do.<br/>
      I’m sure we’ll be back up in no time.</p>

      <a href="/" className="text-white bg-accentorange p-3 w-40 md:w-40 h-10 md:h-14 font-bold text-lg md:text-xl rounded-3xl mt-14 shadow-buttonshadow transition duration-700 hover:scale-105 hover:bg-blue-900 hover:shadow-orangebuttonshadow">
              Try Again
      </a>
      <div className="absolute bottom-5 right-5 font-pp-neue-machina font-bold text-xl">
      <span className="text-white">Orange</span><span className="text-accentorange">Bear</span>
      </div>
    </div>
  );
}

export default NoPage;
