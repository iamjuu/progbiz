import React from 'react';
import { Banner } from '../../Assets';

const Hero = () => {
  return (
    <div className="container  mt-10 mx-auto">
      <div className="p-5 max-w-2xl">
        <h1 className="text-[64px] mb-6 text-center sm:text-left text-3xl sm:text-5xl">
          Your Trusted Partner In Cooling Solution
        </h1>
        <p className="text-gray-600 mb-8 text-sm sm:text-base md:text-lg leading-relaxed">
          Lorem ipsum is simply dummy text of the printing and typesetting industry.
          Lorem ipsum is simply dummy text of the printing and typesetting industry.
        </p>

        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center sm:justify-start">
  <button className="bg-blue-500 text-white px-6 py-3 rounded-full flex items-center justify-center text-base sm:text-lg">
    LET'S TALK
    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  </button>
  <button className="bg-white text-gray-800 px-6 py-3 rounded-full border border-gray-300 flex items-center justify-center text-base sm:text-lg">
    EXPLORE OUR PRODUCTS
    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  </button>
</div>

      </div>

      {/* AC Image */}
      <div className="flex justify-center">
        <img
          src={Banner}
          alt="Air Conditioner"
          className="rounded-lg w-[1200px] h-[500px] object-cover shadow-lg"
        />
      </div>
    </div>
  );
};

export default Hero;
